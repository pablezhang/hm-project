## Hooks是什么？ 

**目标**：能够说出 React Hooks是什么？

**内容**：

- `Hooks`：钩子、钓钩、钩住
- `Hooks` 是 **React v16.8** 中的新增功能 
- 作用：为**函数组件**提供状态、生命周期等原本 class 组件中提供的 React 功能
  - 可以理解为通过 Hooks 为函数组件钩入 class 组件的特性
- 注意：<span style="color:red">**Hooks 只能在函数组件中使用**</span>，自此，函数组件成为 React 的新宠儿

React v16.8 版本前后，组件开发模式的对比：

- React v16.8 以前： class 组件(提供状态) + 函数组件(展示内容)
- React v16.8 及其以后：
  1. class 组件(提供状态) + 函数组件(展示内容)
  2. Hooks(提供状态) + 函数组件(展示内容)
  3. 混用以上两种方式：部分功能用 class 组件，部分功能用 Hooks+函数组件

**总结**：

注意1：虽然有了 Hooks，但 *React 官方并没有计划从 React 库中移除 class*

注意2：有了 Hooks 以后，不能再把**函数组件**称为~~无状态组件~~了，因为 Hooks 为函数组件提供了状态











## 为什么要有 Hooks  

**目标**：能够说出为什么要有 Hooks 以及 Hooks 能解决什么问题

**内容**：

两个角度：1 组件的状态逻辑复用  2 class 组件自身的问题

1. 组件的状态逻辑复用：
   + 在 Hooks 之前，组件的状态逻辑复用经历了：mixins（混入）、HOCs（高阶组件）、render-props 等模式
   + （早已废弃）mixins 的问题：1 数据来源不清晰 2 命名冲突
   + HOCs、render-props 的问题：重构组件结构，导致组件形成 JSX 嵌套地狱问题

2. class 组件自身的问题：
   + 选择：函数组件和 class 组件之间的区别以及使用哪种组件更合适
   + 需要理解 class 中的 this 是如何工作的
   + 相互关联且需要对照修改的代码被拆分到不同生命周期函数中

- 相比于函数组件来说，不利于代码压缩和优化，也不利于 TS 的类型推导

**总结**：

正是由于 React 原来存在的这些问题，才有了 Hooks 来解决这些问题









### 前面学习的 React 知识是有用的

class 组件相关的 API 不用了，比如：

- `class Hello extends Component`
- `componentDidMount`、`componentDidUpdate`、`componentWillUnmount`
- `this` 相关的用法

原来学习的内容还是要用的，比如：

- JSX：`{}`、`onClick={handleClick}`、条件渲染、列表渲染、样式处理等
- 组件：函数组件、组件通讯
- 路由
- React 开发理念：`单向数据流`、`状态提升` 等
- 解决问题的思路、技巧、常见错误的分析等上



## hooks渐进策略

**目标**：能够理解在react中什么场景应该使用hooks

**内容**：

+ react没有计划从React中移除 class [文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)
+ Hooks 和现有代码可以同时工作，你可以渐进式地使用他们
  + 不推荐直接使用 Hooks 大规模重构现有组件 
  + 推荐：新功能用 Hooks，复杂功能实现不了的，也可以继续用 class
  + 找一个功能简单、非核心功能的组件开始使用 hooks
+ 之前的react语法并不是以后就不用了
  + class 组件相关的 API 在hooks中可以不用
    + class 自身语法，比如，constructor、static 等
    + 钩子函数，`componentDidMount`、`componentDidUpdate`、`componentWillUnmount`
    + `this` 相关的用法
  + **原来学习的 React 内容还是要用的**
    + JSX：`{}`、`onClick={handleClick}`、条件渲染、列表渲染、样式处理等
    + 组件：函数组件、组件通讯
    + React 开发理念：`单向数据流`、`状态提升` 等
    + 解决问题的思路、技巧、常见错误的分析等

**总结**：

1. react没有计划从React中移除class
2. react将继续为 class 组件提供支持
3. 可以在项目中同时使用hooks和class





## 知识点补充-使用数组解构简化

比如，要获取数组中的元素：

1. 原始方式：索引访问

```js
const arr = ['aaa', 'bbb']

const a = arr[0]  // 获取索引为 0 的元素
const b = arr[1]  // 获取索引为 1 的元素
```

2. 简化方式：数组解构
   - 相当于创建了两个变量（可以是任意的变量名称）分别获取到对应索引的数组元素

```js
const arr = ['aaa', 'bbb']

const [a, b] = arr
// a => arr[0]
// b => arr[1]

const [state, setState] = arr
```





## useState Hook

### useState Hook 的基本使用

- 使用场景：当你想要在**函数组件中，使用组件状态时**，就要使用 **useState** Hook 了
- 作用：为函数组件提供状态（state）
- 使用步骤：
  1. 导入 `useState` 函数
  2. 调用 `useState` 函数，并传入状态的初始值
  3. 从 `useState` 函数的返回值中，拿到状态和修改状态的函数
  4. 在 JSX 中展示状态
  5. 在按钮的点击事件中调用修改状态的函数，来更新状态

```jsx
import { useState } from 'react'

const Count = () => {
  // 返回值是一个数组
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* 展示状态值 */}
      <h1>useState Hook -> {count}</h1>
      {/* 点击按钮，让状态值 +1 */}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}


//class 写法
class Count extends Component {
  state = {
    count: 0,
  };

  handleChangeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <button onClick={this.handleChangeCount}>点击改变count</button>
      </div>
    );
  }
}
```

- 参数：**状态初始值**。比如，传入 0 表示该状态的初始值为 0
  - 注意：此处的状态可以是任意值（比如，数值、字符串等），而 class 组件中的 state 必须是对象
- 返回值：数组，包含两个值：1 状态值（state） 2 修改该状态的函数（setState）



### 使用useState组件的更新过程

函数组件使用 **useState** hook 后的执行过程，以及状态值的变化： 

- 组件第一次渲染：
  1. 从头开始执行该组件中的代码逻辑
  2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
  3. 渲染组件，此时，获取到的状态 count 值为： 0

- 组件第二次渲染：
  1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
  2. 组件重新渲染时，会再次执行该组件中的代码逻辑
  3. 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
  4. 再次渲染组件，此时，获取到的状态 count 值为：1

注意：**useState 的初始值(参数)只会在组件第一次渲染时生效**。 

也就是说，以后的每次渲染，useState 获取到都是最新的状态值。React 组件会记住每次最新的状态值!



### 为函数组件添加多个状态

问题：如果一个函数组件需要多个状态，该如何处理?
回答：调用 `useState` Hook 多次即可，每调用一次 useState Hook 可以提供一个状态。
注意：useState Hook 多次调用返回的 [state, setState] 相互之间，互不影响。



- 使用数组解构简化 `useState` 的使用
  - 约定：**修改状态的函数名称以 set 开头，后面跟上状态的名称**

```js
// 解构出来的名称可以是任意名称

const [state, setState] = useState(0)
const [age, setAge] = useState(0)
const [count, setCount] = useState(0)
```





### 状态的读取和修改

状态的使用：1 读取状态 2 修改状态

1. 读取状态：该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用

2. 修改状态：
  - `setCount(newValue)` 是一个函数，参数表示：**新的状态值**
  - 调用该函数后，将**使用新的状态值`替换`旧值**
  - 修改状态后，因为状态发生了改变，所以，该组件会重新渲染











### hooks 的使用规则

注意：**React Hooks 只能直接出现在 函数组件 中，不能嵌套在 if/for/其他普通函数中**！

否则就会报错：React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render

React 的 useState 这个 Hook 被条件性（放在一个条件判断中）的调用了。

React Hooks 必须要每次组件渲染时，按照**相同的顺序**来调用所有的 Hooks。

- 为什么会有这样的规则？ 因为 React 是按照 Hooks 的调用顺序来识别每一个 Hook，如果每次调用的顺序不同，导致 React 无法知道是哪一个 Hook

三个限制总结：

1. 不能在if else语句中使用hooks
2. 不能在for语句中使用hooks
3. 不能在普通函数中使用hooks



什么是React中的特殊函数：

1. 函数式组价
2. useXxx命名的自定义hooks函数



### 受控组件-hooks

1. state控制value或者checked
2. onChange 和setState





## useEffect Hook 

1. side effect - 副作用
2. useEffect 的基本使用
3. useEffect 的依赖
4. useEffect 发送请求

### side effect - 副作用

使用场景：当你想要在函数组件中，**处理副作用（side effect）时**，就要使用 **useEffect** Hook 了
作用：**处理函数组件中的副作用（side effect）**

问题：副作用（side effect）是什么? 
回答：在计算机科学中，如果一个函数或其他操作修改了其局部环境之外的状态变量值，那么它就被称为有副作用
类比，对于 999 感冒灵感冒药来说：

- （**主**）作用：用于感冒引起的头痛，发热，鼻塞，流涕，咽痛等 
- 副作用：可见困倦、嗜睡、口渴、虚弱感

理解：副作用是相对于主作用来说的，一个功能（比如，函数）除了主作用，其他的作用就是副作用
对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）

React 组件的公式：**UI = f(state)**

常见的副作用（side effect）

- 数据（Ajax）请求、手动修改 DOM、localStorage 操作等

```js
// 不带副作用的情况：
// 该函数的（主）作用：计算两个数的和
function add(a, b) {
  return a + b
}

// 带副作用的情况：
let c = 1
function add(a, b) {
  // 因为此处修改函数外部的变量值，而这一点不是该函数的主作用，因此，就是：side effect（副作用）
  c = 2
  return a + b
}

// 带副作用的情况：
function add(a, b) {
  // 因为 console.log 会导致控制台打印内容，所以，也是对外部产生影响，所以，也是：副作用
  console.log(a)
  return a + b
}

// 没有副作用：
function getName(obj) {   // 纯函数：固定输入、固定输出
  return obj.name 
}

// 有副作用：
function getName(obj) {
  // 此处直接修改了参数的值，也是一个副作用
  obj.name = '大飞哥'
  return obj.name
}
const o = { name: '小马哥' }
fn(o)
```



### useEffect 的基本使用  

使用场景：当你想要在函数组件中，处理副作用（side effect）时，就要使用 useEffect Hook 了

作用：处理函数组件中的副作用（side effect）
注意：在实际开发中，副作用是不可避免的。因此，react 专门提供了 **useEffect** Hook **来处理函数组件中的副作用**

`useEffect` Hook 看做 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

```js
import { useEffect } from 'react'

useEffect(function effect() {
  document.title = `当前已点击 ${count} 次`
})

useEffect(() => {
  document.title = `当前已点击 ${count} 次`
})
```

解释：

- 参数：回调函数（称为 **effect**），就是**在该函数中写副作用代码**
- 执行时机：该 effect 会在每次组件更新（DOM更新）后执行





### useEffect 的依赖

- 问题：如果组件中有另外一个状态，另一个状态更新时，刚刚的 effect 回调，也会执行 

```react
import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');

  //  调用useEffect  （state变化时，useEffect会自动执行）
  useEffect(() => {
    console.log('userEffect执行了');
    document.title = count;
  });

  return (
    <div>
      <button onClick={() => setMsg(msg + '!')}>点我修改Msg</button>
      <button onClick={() => setCount(count + 1)}>点我count+1</button>
    </div>
  );
}
```



- 性能优化：**跳过不必要的执行，只在 count 变化时，才执行相应的 effect**

```js
useEffect(() => {
  document.title = `当前已点击 ${count} 次`
}, [count])
```

解释：

- 第二个参数：可选的，可省略；也可以传一个数组，数组中的元素可以成为依赖项（deps） 
- 该示例中表示：只有当 count 改变时，才会重新执行该 effect



### useEffect 的依赖是一个空数组

useEffect 的第二个参数，还可以是一个**空数组（[]）**，表示只在组件第一次渲染后执行 effect
使用场景：1 事件绑定 2 发送请求获取数据 等

```js
useEffect(() => {
  const handleResize = () => {}
  window.addEventListener('resize', handleResize)
}, [])
```

解释：

- 该 effect 只会在组件第一次渲染后执行，因此，可以执行像事件绑定等只需要执行一次的操作
  - 此时，相当于 class 组件的 componentDidMount 钩子函数的作用
- 跟 useState Hook 一样，一个组件中也可以调用 useEffect Hook 多次 
- 推荐：一个 useEffect 只处理一个功能，有多个功能时，使用多次 useEffect



### 🔔小结 useEffect 两个参数使用

- useEffect 第一个参数为必传参数。
- useEffect 第二个可选参数。

```js
// 触发时机：1 挂载时执行 2 每次组件重新渲染都会再次执行（不常用，会造成页面卡顿）
useEffect(() => { })

// 触发时机：1.只在挂载时执行一次  😊 等同于在componentDidMount中调用回调函数
useEffect(() => {}, [])

// 触发时机：1 挂载时会执行 2 当 count 变化时会再次执行 😊 等同于在componentDidMount 和 componentDidUpdate两个钩子函数中调用
// 类似vue中侦听器，可以监测数据的变化。
useEffect(() => { }, [count])
```



### useEffect可以监听多个状态

```react
 // 1、第一种写法：分开监听
   useEffect(() => {
     console.log('每次拿到最新的count', count);
   }, [count]);

  useEffect(() => {
     console.log('每次拿到最新的count2', count2);
  }, [count2]);

  // 2. 第二种写法：数组内写多个变量
  useEffect(() => {
    console.log('每次拿到最新的count 和 count2', count + count2);
  }, [count, count2]);
```











### useEffect 组件卸载时

问题：如何在组件卸载时，解绑事件？此时，就用到 effect 的返回值了



静态结构：复制即可

```react
import React, {  useState } from 'react';

export default function App() {
  // 准备组件的显示与隐藏
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      {isShow && <Child />}
      <button onClick={() => setIsShow(!isShow)}>点击卸载子组件</button>
    </div>
  );
}

function Child() {
  // 在子组件中挂载时监听窗口改变事件
  
  return <div>我是子组件</div>;
}
```



正确代码：

```js
const handleResize = () => {}
useEffect(()=>{
  
  window.addEventListener('resize', handleResize)
},[])

useEffect(() => {
    
   // 等同于在componentWillUnMount里调用返回函数
  return () => window.removeEventListener('resize', handleResize)  
}, [])
```

解释：

- effect 的返回值也是可选的，可省略。也可以返回一个清理函数，用来执行事件解绑等清理操作

- 清理函数的执行时机：

  - 1【空数组没有依赖】组件卸载时

    - 此时，相当于 class 组件的 componentWillUnmount 钩子函数的作用

  -  2 【有依赖项】effect 重新执行前（暂时知道即可） 

    

- 推荐：一个 useEffect 只处理一个功能，有多个功能时，使用多次 useEffect 

- 优势：

  - 根据业务逻辑来拆分，相同功能的业务逻辑放在一起，而不是根据生命周期方法名称来拆分代码 
  - 编写代码时，关注点集中；而不是上下翻滚来查看代码

### useEffect 挂载和卸载清理综合写法

```js
  useEffect(() => {
    const timerId = window.setTimeout(() => {
      console.log('一秒时间到，爆炸')
    }, 1000)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [])


  useEffect(() => {
    const fn = () => {
      console.log('浏览器窗口被调整了')
    }
    window.addEventListener('resize', fn)

    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [])
```

### useEffect  发送请求

准备工作：

1. 安装`axios`。
2. 准备`utils/request.js` 
3. 可能需要重启项目。



在组件中，使用 useEffect Hook 发送请求获取数据（side effect）：

```js
// ✅正确写法
useEffect(() => {
  const loadData = async () => {
  	await ...
  
  }
  loadData()
}, [])

// ❌错误演示：
// 不要给 useEffect 第一级函数添加 async
useEffect(async () => {}, [])
```

解释：

- 注意：**useEffect 只能是一个同步函数，不能使用 async**
- 因为 effect 的返回值应该是一个清理函数，React 会在组件卸载或者 effect 的依赖项变化时重新执行 
- 但如果 effect 是 async 的，此时返回值是 Promise 对象。这样的话，就无法保证清理函数被立即调用
- 如果延迟调用清理函数，也就没有机会忽略过时的请求结果或取消请求
- **为了使用 async/await 语法，可以在 useEffect 内部或外部创建 async 函数，并调用**



## Todo案例-hooks版

1. 拆分函数式组件
2. 列表数据定义和渲染
3. 根据id删除一条数据
4. 根据id更新完成状态isDone
5. 清除已完成
6. 统计剩余未完成的数量
7. 切换按钮点击高亮
8. 切换按钮点击显示不同的数据
9. 受控组件和新增数据
10. 小选影响全选
11. 全选影响小选
11. 数据缓存







### useEffect 踩坑注意

1. useEffect 第二个参数，需要先声明依赖数据。

```js
export default function App() {
  // ❌错误写法，type 和 list 还没创建，无法使用
  useEffect(() => {
    console.log('数据更新时 - 设置本地存储数据')
  }, [list, type])  
  const [list, setList] = useState([])
  const [type, setType] = useState('all')
```

2. 书写多个 useEffect 时，注意先后书写顺序。(先书写组件挂载时，再书写组件更新时)

```js
  // 数据更新时 - 设置本地存储数据
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list))
    localStorage.setItem('todos-type', type)
  }, [list, type])

  // ❌错误写法：组件挂载时应该要写在更新时前面。
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('todos')) || []
    const type = localStorage.getItem('todos-type') || 'all'
    setList(list)
    setType(type)
  }, [])
```

