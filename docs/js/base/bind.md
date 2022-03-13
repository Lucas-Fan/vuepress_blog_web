---
title: bind
author: FZYT
date: "2021-10-16"
---

## bind

### 简易实现

```javascript
Function.prototype.bind2 = function(context) {
  var self = this;
  return function() {
    return self.apply(context);
  };
};

var foo = {
  value: 1,
};

function bar() {
  return this.value;
}

var bindFoo = bar.bind(foo);

console.log(bindFoo()); // 1
```

### 处理入参

函数需要传两个参数，可以在 `bind` 的时候，只传一个，在执行返回的函数的时候，再传另一个参。

```javascript
Function.prototype.bind2 = function(context) {
  var self = this;
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);

  return function() {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  };
};
```

### bind 返回函数作为构造函数

```javascript
Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    );
  };
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fBound.prototype = this.prototype;
  return fBound;
};
```

### 构造函数效果的优化实现

```javascript
Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function() {};

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

Function.prototype.bind2 = function(context) {
  let self = this;
  let args = Array.prototype.slice.call(arguments);

  let fNOP = function() {};

  let fBound = function() {
    let bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    );
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
```

<Vssue :title="$title" />
