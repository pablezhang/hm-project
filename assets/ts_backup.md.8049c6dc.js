import{_ as s,c as n,o as a,b as l}from"./app.a2043e60.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"泛型约束","slug":"generic-constraint","link":"#generic-constraint","children":[]}],"relativePath":"ts/backup.md","lastUpdated":1672824080000}'),p={name:"ts/backup.md"},o=l(`<h3 id="generic-constraint" tabindex="-1">泛型约束 <a class="header-anchor" href="#generic-constraint" aria-hidden="true">#</a></h3><blockquote><p>了解：使用泛型约束，实现对泛型类型进行收缩</p></blockquote><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 代码报错</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getId</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">getId</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>解释 <ul><li>Type 可以代表任意类型，无法保证一定存在 length 属性，比如 number 类型就没有 length</li><li>需要为泛型添加约束来 <code>收缩类型</code> (缩窄类型取值范围)</li><li>实现泛型约束两种方式：1 指定更加具体的类型 2 添加约束</li></ul></li></ul><ol><li>指定更加具体的类型</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 约束传入的参数有length属性，约定为数组</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getId</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">getId</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>但是：除了数组，字符串也有length属性</p><ol start="2"><li>添加约束</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 通过 \`extends\` 关键字使用该接口，为泛型(类型变量)添加约束</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意：传入的实参(比如，数组)只要有 length 属性即可（类型兼容性)</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Len</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getId</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Len</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">getId</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">getId</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>解释:</p><ol><li>创建描述约束的接口 Len，该接口要求提供 length 属性</li><li>通过 <code>extends</code> 关键字使用该接口，为泛型(类型变量)添加约束</li><li>该约束表示：<strong>传入的类型必须具有 length 属性</strong></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>泛型约束语法比较高级，一般用于框架封装，或者高级函数封装。</li><li>还有class泛型，一般在node后台开发使用较多，今天也就不提及</li></ul></div>`,12),e=[o];function t(c,r,i,y,F,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
