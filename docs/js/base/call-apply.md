---
title: call 和 apply
author: FZYT
date: "2021-10-15"
---

## call

### 改变 this 指向

给对象加一个属性，之后在 `delete` 删除掉

```javascript
Function.prototype.call1 = function(context) {
  // 首先要获取调用call的函数，用this可以获取
  context.__fn__ = this;
  context.__fn__();
  delete context.__fn__;
};

// 测试一下
var foo = {
  value: 1,
};

function bar() {
  console.log(this.value);
}

bar.call2(foo); // 1
```

### 不定长参数

`eval(string)` 入参是字符串，所以使用 `"arguments[" + i + "]"` 拼接的方式，如果是 `arguments[i]` 这样传个 `eval` 方法的入参就会是 `arguments[i]` 执行 `toString` 的返回值。

```javascript
Function.prototype.call2 = function(context) {
  context.__fn__ = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  eval("context.__fn__(" + args + ")");
  delete context.__fn__;
};

// 测试一下
var foo = {
  value: 1,
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.call2(foo, "kevin", 18);
// kevin
// 18
// 1
```

### 小问题解决

- `this` 参数传 `null`
- 函数有返回值

```javascript
Function.prototype.call2 = function(context) {
  context = context || window;
  context.__fn__ = this;

  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }

  var result = eval("context.__fn__(" + args + ")");

  delete context.__fn__;
  return result;
};

// 测试一下
var value = 2;

var obj = {
  value: 1,
};

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age,
  };
}

bar.call2(null); // 2

console.log(bar.call2(obj, "kevin", 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

## apply

```javascript
Function.prototype.apply = function(context, arr) {
  context = Object(context) || window;
  context.__fn__ = this;

  var result;
  if (!arr) {
    result = context.__fn__();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.__fn__(" + args + ")");
  }

  delete context.__fn__;
  return result;
};
```

<Vssue :title="$title" />
