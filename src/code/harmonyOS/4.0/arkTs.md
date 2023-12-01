---
date: 2023-11-30
# 当前页面内容标题
title: 了解ArkTs语言
# 当前页面图标
icon: edit
# 分类
category:
  - HarmonyOS
# 标签
tag:
  - HarmonyOS4.0
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
footer: 遥遥领先
# 是否将该文章添加至文章列表中
# article: false
# 是否将该文章添加至时间线中
# timeline: true
---
## ArkTs语言基于TypeScript
### TypeScript基础语法
[TypeScript官网](https://developer.harmonyos.com/)
```
// string 字符串，可用单引号双引号
let msg: string = "abc";
// 数值，整数，浮点数都可以
let age: number = 18;
// boolean 布尔值，true/false
let isMarried: boolean = true;
// any 任意值，可以是任意类型
let a: any = "jack";
a = 21
// union 联合类型，可以是多种类型
let u: string|number|boolean = "rose";
u = 18
// Object 对象
let p = {name:"jack",age:21}
// Array:数组，元素可以任意其他类型
let names: Array<string> = ['Jack','Rose'];
let ages: number[] = [18,20];
```