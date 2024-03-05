---
# 当前页面内容标题
title: img标签空白条问题
# 当前页面图标
icon: question
# 分类
category:
  - 前端问题
# 标签
tag:
  - css问题
  - 前端问题
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

::: tip 问题描述

img标签底部总是留有白色空隙，仔细查了，不是多余的标签，也不是margin造成的，问题如下图：  
![输入图片说明](https://images.gitee.com/uploads/images/2020/0804/152031_c5ba44e2_3040924.png "屏幕截图.png")  

造成此现象的原因：
img标签为行内元素，默认对其方式为vertical-align: baseline(基线对齐) 。图片默认的垂直对齐方式是基线，基线的位置与字体相关，所以在某些时 
候，图片底部的空隙可能是 2px，而有时可能是 4px 或更多。不同的 font-size 会造成这个空隙的高度大小。

:::
::: info 解决办法
- 将img标签变成块级元素 img{display:block}
- 修改vertical-align属性（推荐）img{vertical-align:bottom}
- 将img标签的父容器设属性：font-size: 0
- 对img添加属性float,如：img{float:left}
- 对img的父级容器，添加属性overflow:hidden
:::