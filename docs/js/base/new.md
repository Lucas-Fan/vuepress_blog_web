---
title: new
author: FZYT
date: "2021-10-16"
---

## new

### 实现了什么功能

```javascript
// Otaku 御宅族，简称宅
function Otaku(name, age) {
  this.name = name;
  this.age = age;

  this.habit = "Games";
}

// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function() {
  console.log("I am " + this.name);
};

var person = new Otaku("Kevin", "18");

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // 60

person.sayYourName(); // I am Kevin
```

从这个例子中，我们可以看到，实例 `person` 可以：

- 访问到 `Otaku` 构造函数里的属性
- 访问到 `Otaku.prototype` 中的属性

### 初步实现

- 用 `new Object()` 的方式新建了一个对象 `obj`
- 取出第一个参数，就是我们要传入的构造函数。此外因为 `shift` 会修改原数组，所以 `arguments` 会被去除第一个参数
- 将 `obj` 的原型指向构造函数，这样 `obj` 就可以访问到构造函数原型中的属性
- 使用 `apply`，改变构造函数 `this` 的指向到新建的对象，这样 `obj` 就可以访问到构造函数中的属性
- 返回 `obj`

```javascript
// 第一版代码
function objectFactory() {
  var obj = new Object();

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  Constructor.apply(obj, arguments);

  return obj;
}
```

### 返回值

- 有返回值
  - 是对象，只能访问返回值里的属性，原型上的属性也访问不到
  - 是基本类型，和没有返回值一样

```javascript
function objectFactory() {
  // 使用objectFactory的时候,把arguments,转化为数组
  var args = Array.prototype.slice.call(arguments);
  //提取第1个构建对象
  var Constructor = args.shift();
  // 创建constructor实例 instance
  var instance = Object.create(Constructor.prototype);
  // 使用apply函数运行args, 把 instance 绑定到 this
  var temp = Constructor.apply(instance, args);
  //返回对象判断 是object 还是 null 还是实例
  return typeof temp === "object" && temp !== null ? temp : instance;
}

function objectFactory() {
  let args = Array.prototype.slice.call(arguments);
  let Constructor = args.shift();
  let obj = Object.create(Constructor.prototype);
  let temp = Constructor.apply(obj, args);
  return typeof temp === "object" && temp !== null ? temp : obj;
}
```

<Vssue :title="$title" />
