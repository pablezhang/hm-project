---
link: https://juejin.cn/post/6983535049954197512
# title: null
description: 最近两年，Typescript逐渐成为前端项目的标配，甚至出现了Typescript即将接管JS世界的段子。 大部分前端开发者也陆陆续续从React、Vue、Angular开发生态中接触到了TS
keywords: React.js,前端
author: 首页 首页 沸点 课程 直播 活动 商城 App 插件 搜索历史 清空 创作者中心 写文章发沸点写笔记写代码草稿箱 会员 掘金会员，新权益到账啦~! 字节内部课程，Vip免费学习 登录
date: 2021-07-11T05:27:00.000Z
publisher: 稀土掘金
stats: paragraph=89 sentences=28, words=135
---

## 关于 Typescript 在前端的体验漫谈

### 前言

最近两年， `Typescript`逐渐成为前端项目的标配，甚至出现了 `Typescript`即将接管 JS 世界的段子。 大部分前端开发者也陆陆续续从 `React`、 `Vue`、 `Angular`开发生态中接触到了 TS，一时间关于 Typescript 的教程大量出现，不过大部分教程更关注 `Typescript` 的类型系统。本文将对 `TS`进行一个简单的梳理总结，旨在让 `TS`开发者换个角度了解 `Typescript`。读完本文后，我们应当能对 `Typescript` 有以下认识：

1. Typescript 的设计初衷
2. Typescript 的两大特性
3. Typescript 为我们带来了什么
4. Typescript 还为我们带来了什么
5. Typescript 如何更利于构建大型应用
6. 关于 Typescript 的使用建议

### Typescript 的设计初衷

> JavaScript 的段子：动态一时爽，重构地雷场。

最近这些年，随着硬件性能、前端自身快速发展等因素，前端应用程序的体量与复杂度直线上升。而在大型应用的开发过程中，JavaScript 动态语言与弱类型的语言特性，随着成员数量的增加、代码体量的增长、业务场景复杂度的上升，文档及单元测试的缺失等情况的出现，导致了以下问题：

1. 类型错误多，bug 率居高不下。
2. 缺少文档、新成员理解应用逻辑困难。
3. 维护成本高、可扩展性差的困境。

在软件开发过程中，随着需求的变化和系统规模的增大，我们的项目不可避免地会趋于复杂，最终造成了项目中后期进度缓慢的情形 。如何对软件复杂度及其增长速率进行有效控制，便成为一个日益突出的问题。Typescript 正是在这种情况下，应运而生的。

[Typescrip](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FTypeScript%23%25E8%25AE%25BE%25E8%25AE%25A1%25E8%2583%258C%25E6%2599%25AF 'https://zh.wikipedia.org/wiki/TypeScript#%E8%AE%BE%E8%AE%A1%E8%83%8C%E6%99%AF')t 的维基百科词条

> TypeScript 起源于 Javascript 在微软以及客户中开发大型应用中遇到的缺点。处理复杂 JavaScript 代码带来的挑战使他们需要自定义工具来简化组件开发流程。

> TypeScript 开发者寻求一种不破坏现有标准兼容性和跨平台支持的解决方案。知道 ECMAScript 标准为未来[基于类编程](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E5%259F%25BA%25E4%25BA%258E%25E7%25B1%25BB%25E7%25BC%2596%25E7%25A8%258B 'https://zh.wikipedia.org/wiki/%E5%9F%BA%E4%BA%8E%E7%B1%BB%E7%BC%96%E7%A8%8B')提供支持后, Typescript 开发便基于此方案。这形成了包含一组新的语法扩展的一个 JavaScript 编译器，一个基于此提案的超集，可将 TypeScript 语法编译为常规的 JavaScript。

> TypeScript 不仅包含 JavaScript 的语法，而且还提供了静态类型检查以及使用看起来像基于类的[面向对象编程](https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E7%2589%25A9%25E4%25BB%25B6%25E5%25B0%258E%25E5%2590%2591%25E7%25B7%25A8%25E7%25A8%258B 'https://zh.wikipedia.org/wiki/%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E7%B7%A8%E7%A8%8B')语法操作 Prototype。C#的首席架构师以及 Delphi 和 Turbo Pascal 的创始人安德斯·海尔斯伯格参与了 TypeScript 的开发。

### Typescript 的两大特性

维基百科上关于 Typescript 的介绍，提到了两个关键的词： **静态类型检查、面向对象。**

前端在经过 `Flow`、 `Typescript`、[CoffeeScrip](https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F264510450 'https://www.zhihu.com/question/264510450')t 等短暂的[类型检查之争](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F27593029 'https://zhuanlan.zhihu.com/p/27593029')后。 `Typescript`在开发速度、协作成本、维护成本上的出色表现，实践过 `Typescript`构建大型应用的团队，几乎是一边倒的从 JS 转向了 TS。具有代表性的： `Ant-design`、 `Angular`、 `Vue-next`从最初的 JS 版本切换到了 TS 版本。

有意思的是，[为什么 React 不使用 Typescript？](https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F378470381%2Fanswer%2F1079675543 'https://www.zhihu.com/question/378470381/answer/1079675543')

#### 静态类型检查

下图即是 TS 的类型系统，市面上已经存在大量解读类型系统的教程，在这里我们不再赘述

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c315d95914d7463a88a9563122057c98~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

#### 面向对象

在 2018 年年初，我们使用 `Typescript`重构 React 前端，很快我们与 TS 进入了短暂的蜜月期，低级的错误大幅减少。但随后我们就发现，如果上述内容就是 `Typescript`的全部内容， `Typescript`对我们来说就是一个玩具，一个高级玩具。

前面说过，随着代码体量的增长、业务复杂度的上升，文档及单元测试的缺失，人员流动等因素的出现，功能理解、模块冲突、代码难以维护的问题，并没有随着静态类型检查的出现而大幅消失。

虽然逐渐沉淀出[容器组件、展示组件](https://juejin.cn/post/6952018342081216548/#heading-17 'https://juejin.cn/post/6952018342081216548/#heading-17')、业务逻辑与 UI 分离等等模式，我们还是会遇到改一发而动全身的 bug，新成员理解困难、老成员的模块各种冲突问题，逐渐我们感觉到 **Typescript 似乎并没有它宣称的那样强**....

Typescript 号称适合构建大型应用，我们开始反思这句话是否正确。在 github 上我们注意到，vscode 的源码便是通过 Typecript 编写的。既然 Typescript 能搞定 IDE 编辑器这种复杂的应用，我们期望从 vscode 的源码中，找到解决方案。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9edd0865c81b43cdbac500f1326d8157~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35261b071ef1476fb99ae8f8e2e97e35~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

刚开始我们对 vscode 中的这种写法很困惑，并且对大量的 `implements`、 `abstract` 、 `private` `protect`设计感到陌生。经过大量的面向 Goole 编程，我们逐渐注意到 Typescript 的第二个特点， **面向对象：封装、继承、多态。**

- 封装：隐藏数据和功能实现细节，避免被外部修改，而导致误用。
- 继承：子类拥有父类的所有属性和方法，从而实现了实现代码的复用。
- 多态：同一个行为具有多个不同表现形式或形态的能力。

用一句话描述面向对象：将功能拆分为职责单一的功能、通过封装将功能隔离开来，再通过组合的方式去构建大型应用。

面向对象是个比较大的领域，我们将通过下文中的的一个例子，简单的讲下对面向对象的三大特性

### Typescript 为我们带了什么

#### 低级错误的查找定位

rollbar 于 2018 年统计了[前端项目中 Top10 的错误类型](https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Frollbar.com%2Fblog%2Ftop-10-javascript-errors%2F 'https://link.zhihu.com/?target=https://rollbar.com/blog/top-10-javascript-errors/')：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f7f0abeef4744cca7c7e84edc76f87f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

其中有 7 个是类型错误（TypeError），这对 Typescript 来说就是送分题。

#### 阅读代码能力的加持

vscode 中有一些非常方便的代码阅读技巧

- **查看用法** 悬停： 读取 interface 同时显示注释

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84aa888f47274df99fd816aee699f319~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

- **转到定义** Ctrl + 单击、转到符号定义的源代码 F12。
- **窥视定义** Alt + F12：调出一个窥视窗口，显示符号的定义。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41689175379c4c8b97709b60c6c4c5b2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

- **转到参考** Shift + F12：显示相似字符的所有参考。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffc4c6056f0c43d1a2ad88b1317bebb1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

#### 智能提示自动补全

IDE 很早就有了自动补全功能，在有 d.ts 类型文件后，可以自行编写类型库，供 IDE 识别，最具代表性的便是：[www.typescriptlang.org/dt/search?s...](https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdt%2Fsearch%3Fsearch%3D 'https://www.typescriptlang.org/dt/search?search=')

#### 重构能力的增强

- [提取函数](https://link.juejin.cn?target=https%3A%2F%2Fcode.visualstudio.com%2Fassets%2Fdocs%2Flanguages%2Ftypescript%2Frefactor-extract-function.gif 'https://code.visualstudio.com/assets/docs/languages/typescript/refactor-extract-function.gif')

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d73cfc9acb494d3e8be95c8916368a92~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

- [提取变量](https://link.juejin.cn?target=https%3A%2F%2Fcode.visualstudio.com%2Fassets%2Fdocs%2Flanguages%2Ftypescript%2Frefactor-extract-constant.gif 'https://code.visualstudio.com/assets/docs/languages/typescript/refactor-extract-constant.gif')

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a237e0cc38be4e82a26cc2838ee33209~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

以上内容，我们可以总结为：

- 类型错误的静态检查
- 代码可阅读性的提高
- 编写速度的加快
- 可维护性的提高

### Typescript 还为我们带来了什么？

Typescript 的静态类型分析，目前是影响甚广。而 Typescript 的面向对象，前端开发者普遍没太大感受。与后端发展的时间相比，前端快速发展的时间太短，以至于前端整体并没有沉淀出完整体系的 **设计模式、设计原则**与**建模。**借助 Typescript 的特性，刚好使我们可以借鉴其它领域。

#### UML 建模

> UML 主要使用图形符号来表示软件项目的设计，使用 UML 可以帮助项目团队沟通、验证功能的设计。

类图：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4cfe8e08ffc4dd0bbe62f2596a329c3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

时序图：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa56c6ff153347858cd4b1b184d07837~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

用户管理-时序图

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0ec02267852484395fd3ade3b7ea99c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

UML 以图形符号的形式，填补了一部分的设计文档与使用文档。

#### 设计模式与设计原则

在 Typescript 出现之前，部分面向对象的设计模式也可以用 JavaScript 模拟出来，但因为缺少接口 interface、访问限定修饰符、抽象类几个概念，面向对象中的封装与多态在 JavaScript 中一直是一个难以理解、难以模拟的概念，而 Typescript 的出现恰好补上这缺失的一环。

最近几年，在 Typescript 流行开来的同时，函数式编程也随着 Redux 等的流行而火热起来。在这里，我们无意争论两种编程模式孰优孰劣。我们需要的是保证应用构建的强壮与可维护。在使用 Typescript 的过程中，我们决定破界，去尝试前端不熟悉的面向对象。 由于面向对象是个比较大的领域，我们在这里不详细介绍面向对象的内容，有兴趣的同学可以通过底部[设计模式](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fdesign-pattern%2Fdesign-pattern-intro.html 'https://www.runoob.com/design-pattern/design-pattern-intro.html')的链接了解一下面向对象。

### Typescript 更利于构建大型应用

> 如果问 Java、C#的开发者，静态类型检查有何意义？

> 标准答案是"静态类型更有利于构建大型应用"。

Typescript 与 JavaScript 在开发大型应用的进度对比，如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b794ae0644cf46bca03c17d0f4522798~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

我们在前面的 `Typescript`设计初衷中，提到在大型 JavaScript 项目中后期，经常我们面临的 3 个问题：

1.

> 类型错误多，bug 率居高不下。 2.

> 缺少文档、新成员理解应用逻辑困难。 3.

> 维护成本高、可扩展性差的困境。

Typescript 是如何解决上述问题的？

其一、静态类型检查可以尽早构建失败。一旦编写代码时发生类型不匹配，在编译阶段前、中阶段均可发现。

其二、静态类型对阅读代码是友好的。针对大型应用，方法众多，调用关系复杂，不可能每个函数都有人编写细致的文档，所以静态类型就是非常重要的提示和约束。

其三、UML 建模语言，弥补了部分设计文档与说明文档，同一套的设计模式，使得理解功能变得容易。

其四、借助面向的设计思想，隐藏实现细节，加强功能的内聚性。控制接口暴露粒度，来降低功能间的耦合度，达到容易扩展的效果。

其五、静态类型其配合 IDE 的重构功能，维护困难系数直线下降。

结合 Tyepscript、React 接触面向对象 OOP 与函数编程 FP，我们总结了如下体验：

1. 在应用设计层面，OOP 有着一套完整的设计体系，可以应对模块可扩展性、业务的复杂性的挑战。
2. 在细节实现层面，不要为了 OOP 而 OOP，OOP 不是万能的。
3. 在处理数据流时，FP 有着独一无二的优势。

### 关于使用 Typescript 的建议

我们的强烈建议是：Typescript 是一种语言，包含两部分内容：静态类型检查、面向对象。如果你已经尝试了类型系统，并且已经熟悉了 JavaScript 的各种特性，不妨学习下面向对象，或许能更好的掌握 Typescript 这门语言。

在接触面向对象之前的两点提示：

1. 设计原则、设计模式是一种编程范式，是跨语言、跨框架的。
2. 强类型的语言特性，带来了一种新思维习惯。

### 结语

通过前文所述，我们应该知道：

- Typescript 的设计初衷是为了应对大型应用中 JavaScript 的复杂性而设计的。
- Typescript 的两大特性：静态类型检查、面向对象。
- Typescript 作为一种强类型语言，不仅有静态类型系统，更我们带来了一套完整的控制功能复杂度的技术体系。
- 如果你是一名中高级前端，建议在拥抱函数式编程的同时，尝试跨界学习下面向对象编程。

### 推荐阅读

- [为什么要建模？](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fvop444%2Farticle%2Fdetails%2F53515768 'https://blog.csdn.net/vop444/article/details/53515768')
- [UML 建模是什么](https://link.juejin.cn?target=https%3A%2F%2Fwww.visual-paradigm.com%2Fcn%2Fguide%2Fuml-unified-modeling-language%2Fwhat-is-uml%2F 'https://www.visual-paradigm.com/cn/guide/uml-unified-modeling-language/what-is-uml/')？
- [设计模式](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fdesign-pattern%2Fdesign-pattern-intro.html 'https://www.runoob.com/design-pattern/design-pattern-intro.html')
- [降低软件复杂性的一般原则和方法](https://link.juejin.cn?target=https%3A%2F%2Ftech.meituan.com%2F2019%2F09%2F19%2Fcommon-method-of-reduce-complexity.html 'https://tech.meituan.com/2019/09/19/common-method-of-reduce-complexity.html')
