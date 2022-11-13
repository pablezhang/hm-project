const path = require('path');
const fs = require('fs');

// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vuepress', 'images'];

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// 取差值
const difference = (arr1: string[], arr2: string[]) => arr1.filter((item) => !arr2.includes(item));

interface ISiderItem {
  text: string;
  link: string;
  children?: ISiderItem[];
  isLeaf?: boolean;
  rootId: string;
  pid: string;
}

interface IFileMap {
  [key: string]: ISiderItem[];
}

function readFileList(path: string, fileList: ISiderItem[]) {
  let folders: string[] = fs.readdirSync(path);
  // 排除白名单文件
  folders = difference(folders, WHITE_LIST);

  folders.forEach(function (folderOrFile) {
    let stat = fs.statSync(path + folderOrFile);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + folderOrFile + '/', fileList);
    } else {
      const link = path.replace(/\.\/docs/, '') + folderOrFile.replace(/\..+/, '') + '.html';
      const _list = link.split('/');

      let obj = {
        link: link,
        text: folderOrFile.replace(/\..+/, ''), // 取出文件后缀
        isLeaf: true,
        rootId: _list[1],
        pid: _list[2],
      }; //定义一个对象存放文件的路径和名字
      fileList.push(obj);
    }
  });
}
let getFiles = {
  //获取文件夹下的所有文件
  getFileList: function (path) {
    let filesList: ISiderItem[] = [];
    readFileList(path, filesList);

    return filesList;
  },
};

function list2List(list: ISiderItem[]) {
  const _list: ISiderItem[] = [];
  list.forEach((item) => {
    let pItemIndex = _list.findIndex((_item) => _item.text === item.pid);
    if (pItemIndex === -1) {
      _list.push({ text: item.pid, children: [], rootId: item.rootId } as any);
      pItemIndex = _list.findIndex((_item) => _item.text === item.pid);
    }

    _list[pItemIndex].children?.push(item);
  });

  return _list;
}

function list2Tree(list: ISiderItem[]): IFileMap {
  let _map: IFileMap = {};
  list.forEach((item) => {
    let rootId = `/${item.rootId}/`;
    if (!_map[rootId]) {
      _map[rootId] = [];
    }

    _map[rootId].push({
      collapsible: true,
      text: item.text,
      children: item.children?.map((item) => {
        return { link: item.link, text: item.text };
      }),
    } as any);
  });

  return _map;
}
//获取文件夹下的所有文件

let res: any = getFiles.getFileList('./docs/');
res = list2Tree(list2List(res));

fs.readdir('./docs', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    const content = `module.exports =${JSON.stringify(res)}`;
    fs.writeFile('./utils/sidebar.js', content, { encoding: 'utf8' }, (err) => {
      console.log(err);
    });
  }
});
