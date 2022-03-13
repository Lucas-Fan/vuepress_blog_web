---
title: 类型转换
author: FZYT
date: "2021-10-18"
meta:
  - name: 类型转换
---

## 原始值转布尔

只有六种值可以被转换成 `false`

```javascript
console.log(Boolean()); // false

console.log(Boolean(false)); // false

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(+0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
```

## 原始值转数字

根据规范，如果 `Number` 函数不传参数，返回 `+0`，如果有参数，调用 `ToNumber(value)`。

而 `ToNumber` 则直接给了一个对应的结果表。

| 参数类型  | 结果                                           |
| --------- | ---------------------------------------------- |
| Undefined | NaN                                            |
| Null      | +0                                             |
| Boolean   | 如果参数是 true，返回 1。参数为 false，返回 +0 |
| Number    | 返回与之相等的值                               |
| String    | 这段比较复杂，看例子                           |

```javascript
console.log(Number()); // +0

console.log(Number(undefined)); // NaN
console.log(Number(null)); // +0

console.log(Number(false)); // +0
console.log(Number(true)); // 1

console.log(Number("123")); // 123
console.log(Number("-123")); // -123
console.log(Number("1.2")); // 1.2
console.log(Number("000123")); // 123
console.log(Number("-000123")); // -123

console.log(Number("0x11")); // 17

console.log(Number("")); // 0
console.log(Number(" ")); // 0

console.log(Number("123 123")); // NaN
console.log(Number("foo")); // NaN
console.log(Number("100a")); // NaN
```

如果通过 `Number` 转换函数传入一个字符串，它会试图将其转换成一个整数或浮点数，而且会忽略所有前导的 `0`，如果有一个字符不是数字，结果都会返回 `NaN`，鉴于这种严格的判断，我们一般还会使用更加灵活的 `parseInt` 和 `parseFloat` 进行转换。

## 原始值转字符

如果 String 函数不传参数，返回空字符串，如果有参数，调用 ToString(value)，而 ToString 也给了一个对应的结果表。

| 参数类型  | 结果                                                     |
| --------- | -------------------------------------------------------- |
| Undefined | "undefined"                                              |
| Null      | "null"                                                   |
| Boolean   | 如果参数是 true，返回 "true"。参数为 false，返回 "false" |
| Number    | 又是比较复杂，可以看例子                                 |
| String    | 返回与之相等的值                                         |

```javascript
console.log(String()); // 空字符串

console.log(String(undefined)); // undefined
console.log(String(null)); // null

console.log(String(false)); // false
console.log(String(true)); // true

console.log(String(0)); // 0
console.log(String(-0)); // 0
console.log(String(NaN)); // NaN
console.log(String(Infinity)); // Infinity
console.log(String(-Infinity)); // -Infinity
console.log(String(1)); // 1
```

## 原始值转对象

原始值到对象的转换非常简单，原始值通过调用 `String()`、`Number()` 或者 `Boolean()` 构造函数，转换为它们各自的包装对象。

`null` 和 `undefined` 属于例外，当将它们用在期望是一个对象的地方都会造成一个类型错误 (`TypeError`) 异常，而不会执行正常的转换。

## 对象转布尔值

所有都是 `true`

## 对象转字符串和数字

<Vssue :title="$title" />
