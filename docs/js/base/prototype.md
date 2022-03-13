---
title: 原型和原型链
author: FZYT
date: "2021-12-14"
---

## 构造函数创建对象

`Person` 就是一个构造函数，使用 `new` 创建了一个实例 `person`

```javascript
function Person() {}
var person = new Person();
person.name = "Kevin";
console.log(person.name); // Kevin
```

## prototype

每个函数都有一个 `prototype` 属性，它指向用它作为构造函数创建的实例的原型。

```javascript
function Person() {}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = "Kevin";
var person1 = new Person();
var person2 = new Person();
console.log(person1.name); // Kevin
console.log(person2.name); // Kevin
```

## \_\_proto\_\_

每一个 `JavaScript` 对象(除了 `null`)都具有的一个属性，这个属性会指向该对象的原型。

```javascript
function Person() {}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

## constructor

每一个原型都有一个 `constuctor` 属性指向关联的构造函数。

```javascript
function Person() {}
console.log(Person === Person.prototype.constructor); // true
```

![prototype](/image/js/prototype.png)

## 实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

## 原型的原型

其实原型对象就是通过 `Object` 构造函数生成的

## 原型链

那 `Object.prototype` 的原型是 `null`。

> `null` 表示“没有对象”，即该处不应该有值。

所以 `Object.prototype.__proto__` 的值为 `null` 跟 `Object.prototype` 没有原型，其实表达了一个意思。

![prototype-chain](/image/js/prototype-chain.png)

## 其他

### \_\_proto\_\_

其次是 `__proto__`，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 `Person.prototype` 中，实际上，它是来自于 `Object.prototype` ，与其说是一个属性，不如说是一个 `getter/setter`，当使用 `obj.__proto__` 时，可以理解成返回了 `Object.getPrototypeOf(obj)`。

### 继承

最后是关于继承，前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的 JavaScript》中的话，就是：

继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

<Vssue :title="$title" />
