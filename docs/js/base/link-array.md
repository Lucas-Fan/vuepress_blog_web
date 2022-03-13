---
title: bind
author: FZYT
date: "2021-10-16"
---

## 类数组

- 读写一样
- 长度访问一样
- `for` 循环遍历一样
- 类数组不能使用数组方法

## 类数组转化为数组

```javascript
var arrayLike = { 0: "name", 1: "age", 2: "sex", length: 3 };
// 1. slice
Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"]
// 2. splice
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"]
// 3. ES6 Array.from
Array.from(arrayLike); // ["name", "age", "sex"]
// 4. apply
Array.prototype.concat.apply([], arrayLike);
```

## arguments

### callee 属性

```javascript
var data = [];

for (var i = 0; i < 3; i++) {
  (data[i] = function() {
    console.log(arguments.callee.i);
  }).i = i;
}

data[0]();
data[1]();
data[2]();

// 0
// 1
// 2
```

<Vssue :title="$title" />
