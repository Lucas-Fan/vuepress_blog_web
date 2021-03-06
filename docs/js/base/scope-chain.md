---
title: 作用域链
author: FZYT
date: "2021-10-14"
---

## 作用域链

当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

## 函数创建

这是因为函数有一个内部属性 `[[scope]]`，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 `[[scope]]` 就是所有父变量对象的层级链，但是注意：`[[scope]]` 并不代表完整的作用域链！

```javascript
function foo() {
    function bar() {
        ...
    }
}
```

函数创建时，各自的[[scope]]为：

```javascript
foo.[[scope]] = [
  globalContext.VO
];

bar.[[scope]] = [
    fooContext.AO,
    globalContext.VO
];
```

## 函数激活

当函数激活时，进入函数上下文，创建 `VO/AO` 后，就会将活动对象添加到作用链的前端。

<Vssue :title="$title" />
