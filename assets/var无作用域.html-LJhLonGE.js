import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,e as s}from"./app-rpA1P2qj.js";const l={},d=s(`<h2 id="es5中除了function-函数有作用域外其余均无作用域概念" tabindex="-1"><a class="header-anchor" href="#es5中除了function-函数有作用域外其余均无作用域概念" aria-hidden="true">#</a> ES5中除了function 函数有作用域外其余均无作用域概念</h2><h2 id="es5-var-无块级作用域-let有块级作用域" tabindex="-1"><a class="header-anchor" href="#es5-var-无块级作用域-let有块级作用域" aria-hidden="true">#</a> ES5 var 无块级作用域 let有块级作用域</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(document).ready(function () {
     // ES5 var 问题
    for (var i = 0; i &lt; 5; i++) {
        setTimeout(() =&gt; {
            console.log(&quot;ES5  &quot; + i); // 打印 5个5
        }, 1000);
    }
    // ES5 解决
    for (var i = 0; i &lt; 5; i++) {
        (function (i) {
            setTimeout(() =&gt; {
                console.log(&quot;ES5闭包  &quot; + i); // 打印 0 1 2 3 4
            }, 1000);
        })(i)

    }
    // ES6
    for (let i = 0; i &lt; 5; i++) {
        setTimeout(() =&gt; {
            console.log(&quot;ES6  &quot; + i); // 打印 0 1 2 3 4
        }, 1000);
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function r(t,v){return i(),n("div",null,a)}const u=e(l,[["render",r],["__file","var无作用域.html.vue"]]);export{u as default};
