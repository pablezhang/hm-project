# setState

## 更新数据

+ setState() 是异步更新数据的
+ 注意：使用该语法时，后面的 setState() 不要依赖于前面的 setState()

```js
1. 当你调用 setState 的时候，React.js 并不会马上修改 state （为什么）
2. 而是把这个对象放到一个更新队列里面
3. 稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。
```

+ 可以多次调用 setState() ，只会触发一次重新渲染

```js
this.state = { count: 1 }
this.setState({
	count: this.state.count + 1
});
this.setState({
	count: this.state.count + 1
});
console.log(this.state.count) // 1
```

在使用 React.js 的时候，并不需要担心多次进行 `setState` 会带来性能问题。



总结：

1. react中setState是异步更新。
2. 连续调用多个 `setState()` ， 会合并成一个调用。
3. 连续调用多个setStatte()，最终render只执行一次。因此不必担心多次setState带来性能问题



**设计目的：**减少render渲染次数，提高更新DOM效率。

**实现原理：**要更新的数据，放到一个更新队列里面，合并执行。

**合并**：**后面覆盖前面：**最后一个`setState()` 会覆盖前面所有的`setState()`



练习代码静态结构

```
/* 
  学习目标：setState是异步更新
*/

import React from 'react';

export default class App extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {  
    this.setState({
      count: this.state.count + 1,
    });

  };

  render() { 
    return (
      <div>
        <h1>数量： {this.state.count}</h1>
        <button onClick={this.handleClick}>点我修改数量</button>
      </div>
    );
  }
}

```







## 推荐语法

+  推荐：使用 `setState((preState) => {})` 语法

+  参数preState: React.js 会把上一个 `setState` 的结果传入这个函数

```js
this.setState((preState) => {
    return {
    	count: preState.count + 1
    }
})

this.setState((preState) => {
    return {
    	count: preState.count + 1
    }
})

console.log(this.state.count) // 1
```

总结：

1. **这种语法依旧是异步的**。
2. 合并：**后面不会覆盖前面：**形参代表上一次调用的state结果。适用于需要调用多次setState
3. render仍然只会执行一次。



## 第二个参数

+ 场景：在状态更新（页面完成重新渲染）后立即执行某个操作
+  语法：`setState(updater[, callback])`

```js
this.setState(
	(state) => ({}),
	() => {console.log('这个回调函数会在状态更新后立即执行')}
)
```



```js
this.setState(
	(state, props) => {},
	() => {
        
		document.title = '更新state后的标题：' + this.state.count
	}
)
```

总结：

1. 第二个参数是回调函数，会在状态更新后立即执行。
2. 回调函数中调用setState，render会多次执行。





# 组件更新机制

+  setState() 的两个作用： 1. 修改 state 2. 更新组件（UI）
+ 过程：父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件子树（当前组件及其所有子组件）

![](./images/组件更新.png) 

总结：

	1. 组件更新，默认会导致所有后代组件更新。
	2. 组件更新，默认不会影响兄弟组件。



静态结构-复制

```react
import React from 'react';
export default class App extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>数量： {this.state.count}</h1>
        <button onClick={this.handleClick}>点我修改数量</button>
        <Footer></Footer>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <div>我是Footer</div>;
  }
}

```



# 组件性能优化

1. 功能第一  
2. 性能优化



##  减轻state - 负责驱动视图

+ 减轻 state：只存储跟组件渲染相关的数据（比如：count / 列表数据 / loading 等）
+ 注意：不用做渲染的数据不要放在 state 中，比如定时器 id等 
+ 对于这种需要在多个方法中用到的数据，应该直接放在 this 中 
  + this.xxx = 'bbb'
  + this.xxx

```js
class Hello extends Component {
    componentDidMount() {
        // timerId存储到this中，而不是state中
        this.timerId = setInterval(() => {}, 2000)
    }
    componentWillUnmount() {
    	clearInterval(this.timerId)
    }
    render() { … }
}
```



总结：

1. 跟渲染无关的数据，不要放到state中。
2. 跟渲染无关的数据，直接放到this上。











基本类型  - 栈



引用类型 - 堆







































## 避免不必要的重新渲染

+  组件更新机制：父组件更新会引起子组件也被更新，这种思路很清晰
   + 问题：子组件没有任何变化时也会重新渲染 （接收到的props没有发生任何的改变）
+  如何避免不必要的重新渲染呢？
   +  解决方式：使用钩子函数 `shouldComponentUpdate(nextProps, nextState)`

   +  作用：通过返回值决定该组件是否重新渲染，返回 true 表示重新渲染，false 表示不重新渲染
   + 触发时机：更新阶段的钩子函数，组件重新渲染前执行 （shouldComponentUpdate => render）

```js
class Hello extends Component {
    shouldComponentUpdate() {
        // 根据条件，决定是否重新渲染组件
        return false
    }
    render() {…}
}
```

 案例：随机数



## 纯组件

+ 纯组件：`React.PureComponent` 与 `React.Component `功能相似
+ 区别：PureComponent 内部自动实现了 shouldComponentUpdate 钩子，不需要手动比较
+ 原理：纯组件内部通过分别 对比 前后两次 props 和 state 的值，来决定是否重新渲染组件

```js
class Hello extends React.PureComponent {
    render() {
        return (
        	<div>纯组件</div>
        )
    }
}

class Hello2 extends React.Component {
    render() {
        return (
        	<div>{this.props.msg}</div>
        )
    }
}
```

**只有在性能优化的时候可能会用到纯组件，不要所有的组件都使用纯组件，因为纯组件需要消耗性能进行对比**





## 纯组件比较-值类型

+ 说明：纯组件内部的对比是 shallow compare（浅层对比）

+  对于值类型来说：比较两个值是否相同（直接赋值即可，没有坑）

```js
let number = 0
let newNumber = number
newNumber = 2
console.log(number === newNumber) // false
```

```js
state = { number: 0 }
setState({
  number: Math.floor(Math.random() * 3)
})
// PureComponent内部对比：
最新的state.number === 上一次的state.number // false，重新渲染组件
```

## 纯组件比较-引用类型

+ 说明：纯组件内部的对比是 shallow compare（浅层对比）
+ 对于引用类型来说：只比较对象的引用（地址）是否相同

```js
const obj = { number: 0 }
const newObj = obj
newObj.number = 2
console.log(newObj === obj) // true
```



```js
state = { obj: { number: 0 } }
// 错误做法
state.obj.number = 2
setState({ obj: state.obj })
// PureComponent内部比较：
最新的state.obj === 上一次的state.obj // true，不重新渲染组件
```

纯组件的最佳实践：

 注意：state 或 props 中属性值为引用类型时，应该创建新数据，不要直接修改原数据！

```js
// 正确！创建新数据
const newObj = {...state.obj, number: 2}
setState({ obj: newObj })
// 正确！创建新数据
// 不要用数组的push / unshift 等直接修改当前数组的的方法
// 而应该用 concat 或 slice 等这些返回新数组的方法
this.setState({
	list: [...this.state.list, {新数据}]
})

```



