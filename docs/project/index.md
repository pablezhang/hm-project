# 优医问诊-项目起步

## 项目介绍{#intro}
> 知道：整体项目概况，并且知道课程中会实现哪些功能

- [产品原型](https://app.mockplus.cn/s/dtKxarcngm8)
- [产品设计](https://app.mockplus.cn/s/S77krW4rKh)
- [接口文档](https://www.apifox.cn/apidoc/shared-16a58bff-e4db-465c-9c8b-859c839318ac)
- [演示项目](https://cp.itheima.net/)

手机端演示：
<video width="400" controls src="http://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/app/test/20220903/202209032213177645201.mp4"></video>

## 能学到什么{#what}
> 了解：在项目中会使用到哪些技术方案和特色业务

技术方案：  
1. 基于 vue3+typescript 中大型项目开发解决方案
2. 基于 vant 组件库快速构建H5界面解决方案
3. 基于 vue-router 的前端路由解决方案
4. 基于 vite 的 create-vue 构建vue3项目解决方案
5. 基于 pinia 的状态管理解决方案
6. 基于 pinia-plugin-persistedstate 状态持久化解决方案
7. 基于 @vuecore/use 的组合式API工具库解决方案
7. 基于 id-validator 的身份证信息校验解决方案
8. 基于 postcss-px-to-viewport 移动端适配解决方案
9.  基于 vite-plugin-svg-icons 的svg图标组件解决方案
10. 基于 vite-plugin-html 自定义html模板解决方案
11. 基于 unplugin-vue-components 组件自动注册解决方案
12. 基于 socket.io 的即时通讯问诊室解决方案
13. 第三方登录解决方案
14. 第三方支付解决方案
15. 第三方地图解决方案
16. pnpm 包管理方案
17. css 变量主题定制方案
18. 自定义 hook 解决方案
19. axios 二次封装解决方案
20. services API接口分层解决方案
21. 基于 vant 的通用组件封装解决方案
22. mock 本地数据模拟解决方案
23. 基于 eruda 的移动端调试解决方案
24. 生产环境配置方案
25. CI/CD 持续集成自动部署方案


特色业务：  
1. 医生与文章推荐业务
2. 快速问诊业务
3. 问诊费用支付宝支付业务
4. 问诊室业务
5. 药品订单支付宝支付业务
6. 实时物流高德地图业务
7. QQ登录业务



## pnpm介绍&安装{#pnpm}
> 掌握：pnpm 的安装和使用

本质上他是一个包管理工具，和npm/yarn没有区别，主要优势在于
- 包安装速度极快
- 磁盘空间利用效率高

安装：
```sh
npm i pnpm -g
```

使用：

|npm命令	| pnpm等效|
| ---- | ---- |
|npm install	| pnpm install |
|npm i axios	| pnpm add axios |
|npm i webpack -D	| pnpm add webpack -D |
|npm run dev | pnpm dev |


小结：
- pnpm 是一个高效的包管理工具，使用和npm和yarn基本相同

## 项目创建{#create-vue}

> 使用 create-vue 脚手架创建项目

create-vue参考地址：https://github.com/vuejs/create-vue

步骤：
1. 执行创建命令
```bash
pnpm create vue
# or
npm init vue@latest
# or
yarn create vue
```

2. 选择项目依赖内容

```bash
✔ Project name: … patients-h5
✔ Add TypeScript? … No / `Yes`
✔ Add JSX Support? … `No` / Yes
✔ Add Vue Router for Single Page Application development? … No / `Yes`
✔ Add Pinia for state management? … No / `Yes`
✔ Add Vitest for Unit Testing? … `No` / Yes
✔ Add Cypress for both Unit and End-to-End testing? … `No` / Yes
✔ Add ESLint for code quality? … No / `Yes`
✔ Add Prettier for code formatting? … No / `Yes`

Scaffolding project in /Users/zhousg/Desktop/patient-h5-100...

Done. Now run:

  cd patient-h5
  pnpm install
  pnpm dev
```


## vscode插件安装{#ext}

> 安装：项目开发需要的一些插件

必装：
- `Vue Language Features (Volar)` vue3语法支持 
- `TypeScript Vue Plugin (Volar)` vue3中更好的ts提示
- `Eslint` 代码风格校验

:::warning 注意
- vscode 安装了 `Prettier` 插件的可以先 `禁用`，或者关闭保存自动格式化功能，避免和项目的 `Eslint` 风格冲突。
:::


可选：
- `gitLens` 代码git提交记录提示
- `json2ts` json自动转ts类型
- `Error Lens` 行内错误提示


提示：
- 大中型项目建议开启 [TS托管模式](https://staging-cn.vuejs.org/guide/typescript/overview.html#takeover-mode) , 更好更快的类型提示。

## 组件代码片段{#code-snippet}

> 配置：一个vue3页面的基础代码片段

1. 打开代码片段设置界面：

- windows：ctrl + shift + p 
- mac：cmmmand + shift + p 

2. 新建全局代码片段文件

3. 拷贝一下代码，保存即可，输入vueps

```json
{
  "vuets页面": {
		"scope": "vue,markdown",
		"prefix": "vueps",
		"body": [
			"<script setup lang=\"ts\"></script>",
			"",
			"<template>",
			"  <div class=\"$1-page\">$1</div>",
			"</template>",
			"",
			"<style lang=\"scss\" scoped></style>",
			""
		],
		"description": "Log output to console"
	}
}  
```

或者安装：vue-vscode-snippets 插件，快捷键可以看插件[文档](https://github.com/sdras/vue-vscode-snippets)。

## eslint 预制配置{#eslint}

> 使用：eslint的预制配置，且了解配置作用

步骤：

- 在根目录`.eslintrc.cjs`文件中`eslint` 规则
- `cmd` 窗口执行`pnpm lint ` 修复全部`eslint` 报错
- 根目录`.vscode/settings.json`文件中，添加自动修复配置



根目录`.eslintrc.cjs` 中的**eslint规则**

```ts

// ...省略其它代码

module.exports = {
  // ...省略其它代码
  // 添加ESlint规则   
  rules: {
    "prettier/prettier": [
      "warn",
      {        
        singleQuote: true, // 单引号
        semi: false,  // 没有分号
        printWidth: 80, // 每行超过100字符， 自动换行
        trailingComma: "none", // 没有对象数组最后一个逗号
        endOfLine: "auto", // 自动添加换行符
      },
    ],
    "vue/multi-word-component-names": [
      "warn",
      {
        // vue 组件需要大驼峰命名，除去 index 之外，App 是默认支持的
        ignores: ["index"],
      },
    ],
    // 允许对 props 进行解构，我们会开启解构保持响应式的语法糖
    "vue/no-setup-props-destructure": ["off"],
  },
};
```



**开启自动修复eslint报错**

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```



小结：

- 如果公司中会有自己的代码风格规则，大家只需遵守即可
- https://prettier.io/docs/en/options.html 常见规则



## 项目结构调整{#dir}

> 了解：每一个目录结构的作用

```bash
./src
├── assets        `静态资源，图片...`
├── components    `通用组件`
├── composable    `基于组合式API，封装的通用函数`
├── icons         `svg图标`
├── router        `路由`
│   └── index.ts
├── services      `接口服务API`
├── stores        `状态仓库`
├── styles        `样式`
│   └── main.scss
├── types         `TS类型`
├── utils         `工具函数`
├── views         `页面`
├── main.ts       `入口文件`
└──App.vue       `根组件`
```


项目使用sass预处理器，安装sass，即可支持scss语法：
```bash
pnpm add sass -D
```


## 路由代码解析{#router}

> 知道：默认生成的路由代码的含义


```ts
import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例，===> new VueRouter()
// history 是路由模式，hash模式，history模式
// createWebHistory() 是开启history模块   http://xxx/user
// createWebHashHistory() 是开启hash模式    http://xxx/#/user

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path
// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router

```

小结：
- 如何创建实例的方式？
  - `createRouter()`

- 如何设置路由模式？
  - `createWebHistory()`  或者  `createWebHashHistory()`

- `import.meta.env.BASE_URL` 值来自哪里？
  - `vite.config.ts` 的 `base` 属性的值

- `base` 作用是什么?
  - 项目的基础路径前缀，默认是 `/`



## vant组件库{#vant}

> 实现：完整使用vant组件库

[文档](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#dao-ru-suo-you-zu-jian-bu-tui-jian)

安装：
```bash
# Vue 3 项目，安装最新版 Vant
npm i vant
# 通过 yarn 安装
yarn add vant
# 通过 pnpm 安装
pnpm add vant
```

样式：`main.ts`
```ts{5,6}
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
// 样式全局使用
import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
```


组件按需使用：`App.vue`
```vue
<script setup lang="ts">
import { Button as VanButton } from 'vant'
</script>

<template>
  <van-button>按钮</van-button>
</template>

<style scoped></style>
```

提问：为什么不全局使用？
- 全局使用是全量加载，是项目体积变大，加载慢



## 自动按需加载{#auto-import}

> 实现：实现自动按需加载，和自动导入

[官方文档](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi)


手动按需使用组件比较麻烦，需要先导入。配置函数自动按需导入后直接使用即可。


- 安装：

```bash
# 通过 pnpm 安装
pnpm add unplugin-vue-components -D
```

- 配置：

```diff
+// ...省略其它代码
+ import Components from 'unplugin-vue-components/vite'
+ import { VantResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
  plugins: [
    // 解析单文件组件的插件
    vue(),
+    // 默认会自动导入components下的组件
+    // 自动导入的插件，解析器可以是 vant element and-vue 
+    Components({
+      dts: false,
+      // 原因：Toast Confirm 这类组件的样式还是需要单独引入，样式全局引入了，关闭自动引入
+      resolvers: [VantResolver({ importStyle: false })]
+    })
  ],
  
+  // ...省略其它代码
})

```

- 解释：
  - `@` 是vite配置的，基于node提供的API，得到 `src` 的绝对路径

- 说明：
  - 不开起自动生成声明文件 `dts: false`
  - 引入了 vue-router 和 vant 后就拥有了它们组件的类型
  - 后期我们自己有全局组件的时候，教大家如何提供组件类型

## 移动端适配{#vw}

> 实现：使用 vw 完成移动端适配

[文档](https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#viewport-bu-ju)

1. 安装：

```bash
npm i postcss-px-to-viewport -D
# or
pnpm add -D postcss-px-to-viewport
```

2. 根目录新建配置文件：`postcss.config.js`

```js
// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设备宽度375计算vw的值
      viewportWidth: 375,
    },
  },
};
```

3. 重启打包

4. 测试效果：

![image-20220731214535978](./images/image-20220731214535978.png)



## css变量主题定制{#css-var}

> 实现：使用css变量定制项目主题，和修改vant主题


- 如果定义 css 变量使用 css 变量

```css
:root {
  --main: #999;
}
a {
  color: var(--main)
}
```

- 定义项目的颜色风格，覆盖vant的主题色  [官方文档](https://vant-contrib.gitee.io/vant/#/zh-CN/config-provider#ji-chu-bian-liang)

`styles/main.scss`

```scss
:root {
  // 问诊患者：色板
  --cp-primary: #16C2A3;
  --cp-plain: #EAF8F6;
  --cp-orange: #FCA21C;
  --cp-text1: #121826;
  --cp-text2: #3C3E42;
  --cp-text3: #6F6F6F;
  --cp-tag: #848484;
  --cp-dark: #979797;
  --cp-tip: #C3C3C5;
  --cp-disable: #D9DBDE;
  --cp-line: #EDEDED;
  --cp-bg: #F6F7F9;
  --cp-price: #EB5757;
  // 覆盖vant主体色
  --van-primary-color: var(--cp-primary);
}
```

`App.vue`

```vue
<script setup lang="ts"></script>

<template>
  <!-- 验证vant颜色被覆盖 -->
  <van-button type="primary">按钮</van-button>
</template>

<style scoped lang="scss"></style>
```





## 请求工具函数 - Todo{#request}

### 拦截器逻辑{#request-interceptors}

> 实现：token请求头携带，错误响应处理，401错误处理

`utils/request.ts`

```typescript
// 二次封装axios
import axios from 'axios'

const baseURL = 'https://consult-api.itheima.net/'
const request = axios.create({
  baseURL,
  timeout: 10000
})

request.interceptors.request.use(
  function (config) {
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  function (res) {
    return res.data
  },
  function (err) {
    return Promise.reject(err)
  }
)

export default request

```





### 工具函数封装{#request-fn}

> 实现：导出一个通用的请求工具函数，支持设置响应数据类型

- 导出一个通用的请求工具函数
```ts
// 4. 请求工具函数
const request = (url: string, method = 'get', submitData?: object) => {
  return instance.request({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
```

- 支持不同接口设不同的响应数据的类型

加上泛型
```ts
// 这个需要替换axsio.request默认的响应成功后的结果类型
// 之前是：传 { name: string } 然后res是   res = { data: { name: string } }
// 但现在：在响应拦截器中返回了 res.data  也就是将来响应成功后的结果，和上面的类型一致吗？
// 所以要：request<数据类型，数据类型>() 这样才指定了 res.data 的类型
// 但是呢：后台返回的数据结构相同，所以可以抽取相同的类型
type Data<T> = {
  code: number
  message: string
  data: T
}
// 4. 请求工具函数
const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
```


### 测试请求工具{#request-test}

> 测试：封装好的请求工具函数


`App.vue`
```vue
<script setup lang="ts">
import { request } from '@/utils/request'
import type { User } from './types/user'
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'

// 测试，请求拦截器，是否携带token，响应拦截器401拦截到登录地址
const getUserInfo = async () => {
  const res = await request('/patient/myUser')
  console.log(res)
}

// 测试，响应拦截器，出现非10000的情况，和返回剥离后的数据
const store = useUserStore()
const login = async () => {
  const res = await request<User>('/login/password', 'POST', {
    mobile: '13211112222',
    // 密码 abc123456 测试：出现非10000的情况
    password: 'abc12345'
  })
  store.setUser(res.data)
}
</script>

<template>
  <van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
  <van-button type="primary" @click="login">登录</van-button>
</template>
```

测试：
- 登录的时候把密码改错，是测试？
  - 业务逻辑失败
- 登录成功，看 res 打印，是测试？
  - 剥离一层数据
- 获取用户信息成功，是测试？
  - 是否携带token
- 把 token 删除或修改，获取用户信息失败，是测试？
  - 401 token 失效跳转 login 页面


## 约定路由规则{#router-rules}

> 知道：约定项目的映射规则



|  路由路径    |   路由级别   |  组件功能    |
| ---- | ---- | ---- |
|   /login   |   1  |   登录   |
|   /   |   1    |  布局容器    |
|   /user   |   ②    |   个人中心   |
|   /user/patient   |   1   |   家庭档案   |
|   /user/address   |   1   |   地址管理   |
|   /home   |   ②   |   首页   |
|   /consult/fast   |   1   |   快速问诊   |
|   /consult/dep   |   1   |   选择科室   |
|   /consult/illness   |   1   |   病情描述   |
|   /consult/pay   |   1   |   问诊支付   |
|   /room   |   1   |   问诊室   |
|   /user/consult   |   1   |   我的问诊   |
|   /user/consult/:id   |   1   |   问诊详情   |
|   /order/pay   |   1   |   药品订单支付   |
|   /order/pay/result   |   1   |   药品订单支付结果   |
|   /order   |   1   |   药品订单列表   |
|   /order/:id   |   1   |   药品订单详情   |
|   /order/logistics/:id   |   1   |   药品订单物流   |
|   /login/callback   |   1   |   QQ登录回跳   |
|   /article   |   ②    |   健康百科   |
|   /notify   |   ②    |   消息通知   |

步骤：

1. 新建简单页面：
   1. **登录页面**组件： `src/views/Login/index.vue`
   2. **布局容器页面**组件：`src/views/Login/index.vue` 
2. `src/router/index.ts` 中，配置路由匹配规则
3. 测试效果



**路由规则代码**：

```diff
// ...省略其它代码

+ import Layout from '@/views/Layout/index.vue'
+ import Login from '@/views/Login/index.vue'
const router = createRouter({
  
  // ...省略其它代码
  routes: [
+    { path: '/', component: Layout },
+    { path: '/login', component: Login }
  ]
})

export default router

```



小结：

- `/` 是布局容器，是一级路由  `/home` `/article`  `/notify`  `/user` 是二级路由
- 他们的配置需要嵌套，其他的页面路由都是一级路由



