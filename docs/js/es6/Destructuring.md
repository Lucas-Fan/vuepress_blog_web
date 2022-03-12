---
title: 解构赋值
author: FZYT
date: "2021-12-12"
---

### 数组的解构赋值

#### 基本用法

```javascript
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo; // 1
bar; // 2
baz; // 3

let [, , third] = ["foo", "bar", "baz"];
third; // "baz"

let [x, , y] = [1, 2, 3];
x; // 1
y; // 3

let [head, ...tail] = [1, 2, 3, 4];
head; // 1
tail; // [2, 3, 4]

let [x, y, ...z] = ["a"];
x; // "a"
y; // undefined
z; // []
```

- 不完全解构

```javascript
let [x, y] = [1, 2, 3];
x; // 1
y; // 2

let [a, [b], d] = [1, [2, 3], 4];
a; // 1
b; // 2
d; // 4
```

- 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

- 默认值

注意，`ES6` 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于 `undefined`，默认值才会生效。

```javascript
let [x = 1] = [undefined];
x; // 1

let [x = 1] = [null];
x; // null
```

默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

```javascript
let [x = 1, y = x] = []; // x=1; y=1
let [x = 1, y = x] = [2]; // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = []; // ReferenceError: y is not defined
```

### 对象的解构赋值

- 别名

```javascript
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz; // "aaa"

let obj = { first: "hello", last: "world" };
let { first: f, last: l } = obj;
f; // 'hello'
l; // 'world'
```

- 起别名同时获取 `p`

```javascript
let obj = {
  p: ["Hello", { y: "World" }],
};

let {
  p,
  p: [x, { y }],
} = obj;
x; // "Hello"
y; // "World"
p; // ["Hello", {y: "World"}]
```

- 对象的解构赋值可以取到继承的属性

```javascript
const obj1 = {};
const obj2 = { foo: "bar" };
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
foo; // "bar"
```

- 默认值

```javascript
var { x = 3 } = {};
x; // 3

var { x, y = 5 } = { x: 1 };
x; // 1
y; // 5

var { x: y = 3 } = {};
y; // 3

var { x: y = 3 } = { x: 5 };
y; // 5

var { message: msg = "Something went wrong" } = {};
msg; // "Something went wrong"
```

- 如果要将一个已经声明的变量用于解构赋值，必须非常小心。

下面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

```javascript
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
let x;
({x} = {x: 1});
```

### 字符串的解构赋值

- 可以对 `length` 解构

### 数值和布尔值的解构赋值

- 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```javascript
let { toString: s } = 123;
s === Number.prototype.toString; // true

let { toString: s } = true;
s === Boolean.prototype.toString; // true
```

解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于 `undefined` 和 `null` 无法转为对象，所以对它们进行解构赋值，都会报错

### 函数参数的解构赋值

### 模式不能放到圆括号中

- 模式是解构赋值前面的匹配模式例如下面 `foo` 就是模式， `baz` 是被赋值的变量

```javascript
let { foo: baz } = { foo: "aaa", bar: "bbb" };
```

### 用途

- 交换变量
- 从函数返回多个值
- 函数参数的定义
- 提取 JSON 数据
- 函数参数的默认值
- 遍历 Map 结构
- 输入模块的指定方法

<Vssue :title="$title" />
