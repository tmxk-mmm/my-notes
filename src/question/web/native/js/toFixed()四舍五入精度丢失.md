---
date: 2023-12-15
# 当前页面内容标题
title: toFixed()四舍五入精度丢失问题
# 当前页面图标
icon: question
# 分类
category:
  - 前端
# 标签
tag:
  - 原生
sticky: false
order: 
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---
``` js
let num = 8.885
num = num.toFixed(2)
console.log(num) =>  8.88
```
按理说四舍五入是8.89，但是实际结果为8.88。
但是实际上采用的银行家舍入法：四舍六入五考虑，五后非零进1，五后为零看奇偶，五前为偶舍去，五前为奇进一。
::: warning 注意
四舍五入推荐使用round()方法,如果一定要使用toFixed方法就会引起以下问题
:::

### js - <span style="color:red">tofixed</span>精度丢失问题 原因
toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。例如将数据Num保留2位小数，则表示为：toFixed(Num)；
但是其四舍五入的规则与数学中的规则不同，使用的是银行家舍入规则，

银行家舍入：所谓银行家舍入法，其实质是一种四舍六入五取偶（又称四舍六入五留双）法。具体规则如下：简单来说就是：四舍六入五考虑，五后非零就进一，五后为零看奇偶，五前为偶应舍去，五前为奇要进一。

经测试发现，在chorme下面，并没有完全遵守这个规则，尤其是5的后面没有数字的时候，不是这么判断的，如下：
``` 示例代码
var b = 1.335
b.toFixed(2) // "1.33"
 
var b = 1.345
b.toFixed(2) // "1.34"
 
var b = 1.355
b.toFixed(2) // "1.35"
 
var b = 1.365
b.toFixed(2) // "1.36"
 
var b = 1.375
b.toFixed(2) // "1.38"
 
var b = 1.385
b.toFixed(2) // "1.39"
```

可以发现在chorme下没有完全去遵循这个规律，或许它有自己的算法，但是毕竟它没有遵循通用的银行家算法，所以tofixed这个方法在涉及到金钱计算的业务中还是少用.

### 解决办法
1. 四舍五入使用round()方法
2. 重写toFixed()方法
``` js
// toFixed兼容方法
 
Number.prototype.toFixed = function (n) {
    if (n > 20 || n < 0) {
 
        throw new RangeError('toFixed() digits argument must be between 0 and 20');
 
    }
    const number = this;
    if (isNaN(number) || number >= Math.pow(10, 21)) {
 
        return number.toString();
 
    }
    if (typeof (n) == 'undefined' || n == 0) {
 
        return (Math.round(number)).toString();
 
    }
    let result = number.toString();
    const arr = result.split('.');
    // 整数的情况
    if (arr.length < 2) {
        result += '.';
        for (let i = 0; i < n; i += 1) {
            result += '0';
        }
        return result;
    }
    const integer = arr[0];
    const decimal = arr[1];
    if (decimal.length == n) {
        return result;
    }
    if (decimal.length < n) {
        for (let i = 0; i < n - decimal.length; i += 1) {
            result += '0';
        }
        return result;
    }
    result = integer + '.' + decimal.substr(0, n);
    const last = decimal.substr(n, 1);
    // 四舍五入，转换为整数再处理，避免浮点数精度的损失
    if (parseInt(last, 10) >= 5) {
        const x = Math.pow(10, n);
        result = (Math.round((parseFloat(result) * x)) + 1) / x;
        result = result.toFixed(n);
    }
    return result;
}
```