---
date: 2024-01-19
# 当前页面内容标题
title: 微信小程序相同位数的数字内容在 ios 上不对齐问题
# 当前页面图标
icon: question
# 分类
category:
  - 前端
# 标签
tag:
  - 微信小程序
sticky: false
order: 
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

相同位数的不同数字字符串，在微信小程序安卓端中显示是对齐的相同长度，而IOS端却不能对齐，长度不一致。解决方法是把字体设为 -apple-system 并且给 font-feature-settings 添加 “tnum” 规则：
``` css
page {
    font-family: -apple-system,Helvetica,sans-serif;
    font-feature-settings:"tnum" 1;
}
```