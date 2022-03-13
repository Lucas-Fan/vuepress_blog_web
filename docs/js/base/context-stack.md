---
title: 执行上下文
author: FZYT
date: "2021-10-14"
---

## 执行上下文

所以 `JavaScript` 引擎创建了执行上下文栈（`Execution context stack，ECS`）来管理执行上下文

试想当 `JavaScript` 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 `globalContext` 表示它，并且只有当整个应用程序结束的时候，`ECStack` 才会被清空，所以程序结束之前， `ECStack` 最底部永远有个 `globalContext`。

## 思考

- 实例一

```javascript
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}
checkscope();
```

```javascript
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
```

- 实例二

```javascript
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}
checkscope()();
```

```javascript
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```

<Vssue :title="$title" />
