### Set

#### 基本知识

- `ES6` 提供了新的数据结构 `Set`。它类似于数组，但是成员的值都是唯一的，没有重复的值。

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach((x) => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

- 数组去重
- 字符串去重
- 向 `Set` 加入值的时候，不会发生类型转换，所以 `5` 和 `"5"` 是两个不同的值
- `Set` 内部判断是否相等的算法识别 `NaN` 和他本身相等，而 `===` 确认为不等
- 另外，两个对象总是不相等的

#### Set 实例的属性和方法

- `Set` 结构的实例有以下属性。

  - `Set.prototype.constructor`：构造函数，默认就是 `Set` 函数。
  - `Set.prototype.size`：返回 `Set` 实例的成员总数。

- `Set` 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

  - `Set.prototype.add(value)`：添加某个值，返回 `Set` 结构本身。
  - `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
  - `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为 `Set` 的成员。
  - `Set.prototype.clear()`：清除所有成员，没有返回值。

- `Set` 结构的实例有四个遍历方法，可以用于遍历成员。

  - `Set.prototype.keys()`：返回键名的遍历器
  - `Set.prototype.values()`：返回键值的遍历器
  - `Set.prototype.entries()`：返回键值对的遍历器
  - `Set.prototype.forEach()`：使用回调函数遍历每个成员

- 这意味着，可以省略 `values` 方法，直接用 `for...of` 循环遍历 `Set`。
- `Set` 结构的实例与数组一样，也拥有 `forEach` 方法，用于对每个成员执行某种操作，没有返回值。
  `forEach` 方法还可以接受第二个参数，用来绑定 `this`。

- 遍历的应用

  - 扩展运算符（`...`）内部使用 `for...of` 循环，所以也可以用于 `Set` 结构。
  - 扩展运算符和 `Set` 结构相结合，就可以去除数组的重复成员。
  - 而且，数组的 `map` 和 `filter` 方法也可以间接用于 `Set` 了。
  - 因此使用 `Set` 可以很容易地实现并集（`Union`）、交集（`Intersect`）和差集（`Difference`）。
  - 想要改变 `Set` 的结构只能重新赋值

```javascript
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x \* 2));
// 返回 Set 结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回 Set 结构：{2, 4}
```

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter((x) => !b.has(x)));
// Set {1}
```

### WeakSet

#### 与 Set 区别

- `WeakSet` 的成员只能是对象，而不能是其他类型的值。
- `WeakSet` 中的对象都是弱引用，即垃圾回收机制不考虑 `WeakSet` 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 `WeakSet` 之中。

> 这是因为垃圾回收机制根据对象的可达性（`reachability`）来判断回收，如果对象还能被访问到，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。`WeakSet` 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，`WeakSet` 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 `WeakSet` 里面的引用就会自动消失。

#### 语法

实际上，任何具有 `Iterable` 接口的对象，都可以作为 `WeakSet` 的参数。

```javascript
const a = [
  [1, 2],
  [3, 4],
];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}
```

- `WeakSet` 结构有以下三个方法。

  - `WeakSet.prototype.add(value)`：向 `WeakSet` 实例添加一个新成员。
  - `WeakSet.prototype.delete(value)`：清除 `WeakSet` 实例的指定成员。
  - `WeakSet.prototype.has(value)`：返回一个布尔值，表示某个值是否在 `WeakSet` 实例之中。

`WeakSet` 没有 `size` 属性，没有办法遍历它的成员。

### Map

#### 含义和基本用法

`JavaScript` 的对象（`Object`），本质上是键值对的集合（`Hash` 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

为了解决这个问题，`ES6` 提供了 `Map` 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，`Object` 结构提供了“字符串—值”的对应，`Map` 结构提供了“值—值”的对应，是一种更完善的 `Hash` 结构实现。如果你需要“键值对”的数据结构，`Map` 比 `Object` 更合适。

`Map` 可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。

```javascript
const map = new Map([
  ["name", "张三"],
  ["title", "Author"],
]);

map.size; // 2
map.has("name"); // true
map.get("name"); // "张三"
map.has("title"); // true
map.get("title"); // "Author"
```

事实上，不仅仅是数组，任何具有 `Iterator` 接口、且每个成员都是一个双元素的数组的数据结构都可以当作 `Map` 构造函数的参数。

注意，只有对同一个对象的引用，`Map` 结构才将其视为同一个键。这一点要非常小心。

```javascript
const map = new Map();

map.set(["a"], 555);
map.get(["a"]); // undefined
```

上面代码的 `set` 和 `get` 方法，表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此 `get` 方法无法读取该键，返回 `undefined`。

对 `NaN` 处理和 `Set` 一样

#### 实例的属性和操作方法

- `size`
- `Map.prototype.set(key, value)`
- `Map.prototype.get(key)`
- `Map.prototype.has(key)`
- `Map.prototype.delete(key)`
- `Map.prototype.clear()`

#### 遍历方法

`Map` 结构原生提供三个遍历器生成函数和一个遍历方法。

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 `Map` 的所有成员。

需要特别注意的是，`Map` 的遍历顺序就是插入顺序。

`forEach` 方法还可以接受第二个参数，用来绑定 `this`。

#### 与其他数据结构的互相转换

- 对象转为 `Map` 可以通过 `Object.entries()`。

### WeakMap

`WeakMap` 与 `Map` 的区别有两点。

首先，`WeakMap` 只接受对象作为键名（`null` 除外），不接受其他类型的值作为键名。
