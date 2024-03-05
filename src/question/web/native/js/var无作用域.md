---
date: 2023-12-08
# 当前页面内容标题
title: var无作用域问题
# 当前页面图标
icon: question
# 分类
category:
  - 前端
# 标签
tag:
  - 原生
  - 前端问题
sticky: false
order: 
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---
## ES5中除了function 函数有作用域外其余均无作用域概念 
## ES5 var 无块级作用域 let有块级作用域

```
$(document).ready(function () {
     // ES5 var 问题
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log("ES5  " + i); // 打印 5个5
        }, 1000);
    }
    // ES5 解决
    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(() => {
                console.log("ES5闭包  " + i); // 打印 0 1 2 3 4
            }, 1000);
        })(i)

    }
    // ES6
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log("ES6  " + i); // 打印 0 1 2 3 4
        }, 1000);
    }
})
```
