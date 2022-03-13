---
title: 创建对象
author: FZYT
date: "2021-10-17"
meta:
  - name: 继承
---

## 工厂模式

缺点：对象无法识别，因为所有的实例都指向一个原型

```javascript
function createPerson(name) {
  var o = new Object();
  o.name = name;
  o.getName = function() {
    console.log(this.name);
  };

  return o;
}

var person1 = createPerson("kevin");
```

## 构造函数模式

优点：实例可以识别为一个特定的类型
缺点：每次创建实例时，每一个方法都要被创建一次

```javascript
function Person(name) {
  this.name = name;
  this.getName = function() {
    console.log(this.name);
  };
}

var person1 = new Person("kevin");
```

## 构造函数模式优化

优点：解决了每个方法都要被重新创建的问题

缺点：伪封装

```javascript
function Person(name) {
  this.name = name;
  this.getName = getName;
}

function getName() {
  console.log(this.name);
}

var person1 = new Person("kevin");
```

## 原型模式

优点：方法不会重新创建

缺点：1. 所有的属性和方法都共享 2. 不能初始化参数

```javascript
function Person(name) {}

Person.prototype.name = "keivn";
Person.prototype.getName = function() {
  console.log(this.name);
};

var person1 = new Person();
```

## 原型模式优化

优点：封装性好了一些
缺点：1. 所有的属性和方法都共享 2. 不能初始化参数

```javascript
function Person(name) {}

Person.prototype = {
  constructor: Person,
  name: "kevin",
  getName: function() {
    console.log(this.name);
  },
};

var person1 = new Person();
```

## 组合模式

优点：该共享的共享，该私有的私有，使用最广泛的方式

缺点：有的人就是希望全部都写在一起，即更好的封装性

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  getName: function() {
    console.log(this.name);
  },
};

var person1 = new Person();
```

## 动态原型模式

```javascript
function Person(name) {
  this.name = name;
  if (typeof this.getName != "function") {
    Person.prototype.getName = function() {
      console.log(this.name);
    };
  }
}

var person1 = new Person();
```

## 寄生构造函数模式

```javascript
function Person(name) {
  var o = new Object();
  o.name = name;
  o.getName = function() {
    console.log(this.name);
  };

  return o;
}

var person1 = new Person("kevin");
console.log(person1 instanceof Person); // false
console.log(person1 instanceof Object); // true
```

## 稳妥构造函数模式

```javascript
function person(name) {
  var o = new Object();
  o.sayName = function() {
    console.log(name);
  };
  return o;
}

var person1 = person("kevin");

person1.sayName(); // kevin

person1.name = "daisy";

person1.sayName(); // kevin

console.log(person1.name); // daisy
```

<Vssue :title="$title" />
