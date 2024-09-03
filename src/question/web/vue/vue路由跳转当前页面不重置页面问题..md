---
date: 2024-09-03
# 当前页面内容标题
title: vue路由跳转当前页面不重置页面问题
# 当前页面图标
icon: question
# 分类
category:
  - 前端
# 标签
tag:
  - vue
sticky: false
order: 
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---
::: warning 注意
使用下面的方法重置data
:::

``` js
Object.assign(this.$data, this.$options.data.call(this)); 
```