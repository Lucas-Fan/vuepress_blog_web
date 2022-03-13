---
title: 词法作用域和动态作用域
author: FZYT
date: "2021-10-14"
---

## 作用域

作用域是指程序源代码中定义变量的区域。

作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

`JavaScript` 采用词法作用域(`lexical scoping`)，也就是静态作用域。

## 静态作用域与动态作用域

静态作用域在代码没有运行的时候就确定了作用域。

动态作用域在代码运行的时候才能确定作用域。

```javascript
var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar();

// 结果是 ???
// 应该是 1
```

<Vssue :title="$title" />
