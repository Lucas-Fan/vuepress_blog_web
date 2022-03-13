---
title: 闭包
author: FZYT
date: "2021-10-15"
---

## 闭包

闭包就是函数和函数能够访问的自由变量，这个自由变量即使创建它的上下文已经销毁，它仍然存在。

## 原理

- 创建包含自由变量的作用域链
- 将作用域链复制到执行上下文
- 执行上下文销毁的时候，作用域链并没有被销毁，还能被访问

## 必刷题

```javascript
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function() {
    console.log(i);
  };
}

data[0](); // 3
data[1](); // 3
data[2](); // 3
```

```javascript
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function(i) {
    return function() {
      console.log(i);
    };
  })(i);
}

data[0](); // 0
data[1](); // 1
data[2](); // 2
```

<Vssue :title="$title" />
