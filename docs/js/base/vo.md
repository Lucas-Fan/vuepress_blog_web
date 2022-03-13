---
title: 变量对象
author: FZYT
date: "2021-10-13"
---

## 变量对象

变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。

### 全局上下午文的变量对象

全局对象

1.可以通过 `this` 引用，在客户端 `JavaScript` 中，全局对象就是 `Window` 对象。

```javascript
console.log(this);
```

2.全局对象是由 `Object` 构造函数实例化的一个对象。

```javascript
console.log(this instanceof Object);
```

3.预定义了一堆，嗯，一大堆函数和属性。

```javascript
// 都能生效
console.log(Math.random());
console.log(this.Math.random());
```

4.作为全局变量的宿主。

```javascript
var a = 1;
console.log(this.a);
```

5.客户端 `JavaScript` 中，全局对象有 `window` 属性指向自身。

```javascript
var a = 1;
console.log(window.a);

this.window.b = 2;
console.log(this.b);
```

花了一个大篇幅介绍全局对象，其实就想说：

全局上下文中的变量对象就是全局对象呐！

### 函数上下午文的变量对象

在函数上下文中，我们用活动对象(`activation object, AO`)来表示变量对象。

## 执行过程

- 进入执行上下文
- 代码执行

### 进入执行上下文

当进入执行上下文时，这时候还没有执行代码，

变量对象会包括：

- 函数的所有形参 (如果是函数上下文)

  - 由名称和对应值组成的一个变量对象的属性被创建
  - 没有实参，属性值设为 undefined

- 函数声明

  - 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
  - 如果变量对象已经存在相同名称的属性，则完全替换这个属性

- 变量声明

  - 由名称和对应值（undefined）组成一个变量对象的属性被创建；
  - 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

### 代码执行

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

### 总结

到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：

- 全局上下文的变量对象初始化是全局对象

- 函数上下文的变量对象初始化只包括 Arguments 对象

- 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

- 在代码执行阶段，会再次修改变量对象的属性值

<Vssue :title="$title" />
