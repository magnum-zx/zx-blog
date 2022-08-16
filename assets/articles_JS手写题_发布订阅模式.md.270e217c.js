import{_ as s,c as n,o as a,a as l}from"./app.4b297bf9.js";const i=JSON.parse('{"title":"\u624B\u5199\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"articles/JS\u624B\u5199\u9898/\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F.md"}'),p={name:"articles/JS\u624B\u5199\u9898/\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F.md"},o=l(`<h1 id="\u624B\u5199\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1">\u624B\u5199\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F <a class="header-anchor" href="#\u624B\u5199\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a></h1><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventEmitter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u4E8B\u4EF6\u8BA2\u9605\uFF0C\u9700\u8981\u63A5\u6536\u8BA2\u9605\u4E8B\u4EF6\u540D\u548C\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">on</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">eventName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u79FB\u9664\u8BA2\u9605\uFF0C\u9700\u8981\u79FB\u9664\u7684\u8BA2\u9605\u4E8B\u4EF6\u540D\u53CA\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">off</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">eventName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// indexOf \u4E0E findIndex\u7684\u533A\u522B</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// indexOf \u6839\u636E\u5143\u7D20\u503C\u67E5\u627E\u5BF9\u5E94\u7D22\u5F15</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// findIndex \u53C2\u6570\u662F\u4E00\u4E2A\u67E5\u8BE2\u51FD\u6570\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u67E5\u8BE2\u6761\u4EF6\uFF0C\u8FD4\u56DE\u6EE1\u8DB3\u6761\u4EF6\u7684\u5143\u7D20\u7D22\u5F15</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// \u79FB\u9664\u6307\u5B9A\u8BA2\u9605\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u4E8B\u4EF6\u53D1\u5E03\uFF0C\u9700\u8981\u63A5\u6536\u53D1\u5E03\u4E8B\u4EF6\u540D\u548C\u5BF9\u5E94\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">emit</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">eventName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> once </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// \u521B\u5EFA\u526F\u672C\uFF0C\u5982\u679C\u56DE\u8C03\u51FD\u6570\u5185\u7EE7\u7EED\u6CE8\u518C\u76F8\u540C\u4E8B\u4EF6\uFF0C\u4F1A\u9020\u6210\u6B7B\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tasks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">tasks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">callback</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">once</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">delete</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">events</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">eventName</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// test</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> eventBus </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">EventEmitter</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> task1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> task2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">eventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> task1)</span></span>
<span class="line"><span style="color:#A6ACCD;">eventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> task2)</span></span>
<span class="line"><span style="color:#A6ACCD;">eventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> task1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">eventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">task</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// task2</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,r,F,y,D,A){return a(),n("div",null,e)}var f=s(p,[["render",t]]);export{i as __pageData,f as default};
