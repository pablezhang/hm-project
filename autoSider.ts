const fs = require('fs');
const { resolve } = require('path');

// 文件根目录
const DIR_PATH = resolve(__dirname, './');
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vitepress', 'react'];

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// 取差值
const intersections = (arr1: string[], arr2: string[]) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

interface ISiderItem {
  text: string;
  link: string;
  children?: string[];
}
function getList(folders) {
  // 存放结果
  const res: ISiderItem[] = [];
  // 遍历docs文件夹下所有的子文件夹
  for (let folder in folders) {
    res.push({
      text: folder,
      link: `${folder}`,
    });
    // if (isDir) {
    //   // 如果是文件夹,读取之后作为下一次递归参数
    //   const files = fs.readdirSync(dir);
    //   res.push({
    //     text: folders[folder],
    //     collapsible: true,
    //     items: getList(files, dir, `${pathname}/${folders[folder]}`),
    //   });
    // } else {
    //   // 获取名字

    // }
  }
  return res;
}
const rootFolder = resolve(DIR_PATH, 'docs');

const run = () => {
  // 获取pathname的路径
  // 读取pathname下的所有文件或者文件夹
  let folders = fs.readdirSync(rootFolder);
  // 过滤掉
  folders = intersections(folders, WHITE_LIST);
  // getList函数后面会讲到
  return getList(folders);
};

const res = run();

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
