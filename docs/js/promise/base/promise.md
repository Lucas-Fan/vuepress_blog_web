
> (阮一峰 Promise)[https://es6.ruanyifeng.com/#docs/promise#Promise-allSettled]

## promise 含义

所谓 `Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，`Promise` 是一个对象，从它可以获取异步操作的消息。

- `Promise` 对象的状态不受外界影响
- 一旦状态发生改变，就不会再变，只能从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`
- 无法取消 `Promise`，一旦新建它就会立即执行，无法中途取消
- 如果不设置回调函数，`Promise` 内部抛出的错误，不会反应到外部
- 当处于 `pending` 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

## 基本用法

新建一个 `Promise` 对象，`new Promise` 中的 `console.log('Promise start');` 会先执行，`resolve`、`reject` 的回调函数执行前 `console.log('Promise end');` 会执行。

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code
  console.log('Promise start');
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
  console.log('Promise end');
});
```

`Promise` 实例生成以后，可以用 `then` 方法分别指定 `resolved` 状态和 `rejected` 状态的回调函数。

```javascript
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

`Promise` 还可以用 `catch` 方法捕获异常和指定 `rejected` 状态的回调函数。


```javascript
const p1 = new Promise(function (resolve, reject) {
  // ...
});

const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```

上面代码中，`p1` 和 `p2` 都是 `Promise` 的实例，但是 `p2` 的 `resolve` 方法将 `p1` 作为参数，即一个异步操作的结果是返回另一个异步操作。

注意，这时 `p1` 的状态就会传递给 `p2`，也就是说，`p1` 的状态决定了 `p2` 的状态。如果 `p1` 的状态是 `pending`，那么 `p2` 的回调函数就会等待 `p1` 的状态改变；如果 `p1` 的状态已经是 `resolved` 或者 `rejected` ，那么 `p2` 的回调函数将会立刻执行。

## Promise.prototype.then()

定义在原型对象 `Promise.prototype` 上，作用是为 `Promise` 实例添加状态改变时的回调函数。第一个参数是 `resolved` 状态的回调函数，第二个参数是 `rejected` 状态的回调函数，它们都是可选的。

`then` 方法返回的是一个新的 `Promise` 实例（注意，不是原来那个 `Promise` 实例）。因此可以采用链式写法，即 `then` 方法后面再调用另一个 `then` 方法。

当上一个 `then` 方法返回的还是一个 `Promise` 对象（即有异步操作），这时后一个回调函数就会等待该 `Promise` 对象的状态发生变化。

```javascript
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});
```

## Promise.prototype.catch()

`Promise.prototype.catch()` 方法是 `.then(null, rejection)` 或 `.then(undefined, rejection)` 的别名，用于指定发生错误时的回调函数。

`Promise` 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 `catch` 语句捕获。

```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```

上面代码中，`someAsyncThing()` 函数产生的 `Promise` 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示 `ReferenceError: x is not defined`，但是不会退出进程、终止脚本执行，`2` 秒之后还是会输出 `123`。这就是说，`Promise` 内部的错误不会影响到 `Promise` 外部的代码，通俗的说法就是“ `Promise` 会吃掉错误”。

`catch` 只会捕获前面没有被捕获的异常，

```javascript
const promise = new Promise(function (resolve, reject) {
  resolve('ok');
  setTimeout(function () { throw new Error('test') }, 0)
});
promise.then(function (value) { console.log(value) }).catch(err=>{console.log('123',err)});
// ok
// Uncaught Error: test
```

上面的代码中 `setTimeout(function () { throw new Error('test') }, 0)` 在下一轮事件循环再抛出异常，所以 `catch` 捕获不到，成为了未捕获异常。

## Promise.prototype.finally()

`finally` 方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 `Promise` 状态到底是 `fulfilled` 还是 `rejected`。这表明，`finally` 方法里面的操作，应该是与状态无关的，不依赖于 `Promise` 的执行结果。

### 实现

```javascript
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```

## Promise.all()

```javascript
const p = Promise.all([p1, p2, p3]);
```

- 只有 `p1、p2、p3` 的状态都变成 `fulfilled`，`p` 的状态才会变成 `fulfilled`，此时 `p1、p2、p3` 的返回值组成一个数组，传递给 `p` 的回调函数。

- 只要 `p1、p2、p3` 之中有一个被 `rejected`，`p` 的状态就变成 `rejected`，此时第一个被 `reject` 的实例的返回值，会传递给 `p` 的回调函数。

## Promise.race()

```javascript
const p = Promise.race([p1, p2, p3]);
```

上面代码中，只要 `p1、p2、p3` 之中有一个实例率先改变状态，`p` 的状态就跟着改变。那个率先改变的 `Promise` 实例的返回值，就传递给 `p` 的回调函数。

## Promise.allSettled()

用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做 `Settled`，包含了 `fulfilled` 和 `rejected` 两种情况。

该方法返回的新的 `Promise` 实例，一旦发生状态变更，状态总是 `fulfilled`，不会变成 `rejected`。状态变成 `fulfilled` 后，它的回调函数会接收到一个数组作为参数，该数组的每个成员对应前面数组的每个 `Promise` 对象。

## Promise.any()

`Promise.any()` 方法。该方法接受一组 `Promise` 实例作为参数，包装成一个新的 `Promise` 实例返回。只要参数实例有一个变成 `fulfilled` `状态，包装实例就会变成fulfilled` 状态；如果所有参数实例都变成 `rejected` 状态，包装实例就会变成 `rejected` 状态。

`Promise.any()` 抛出的错误，不是一个一般的 `Error` 错误对象，而是一个 `AggregateError` 实例。它相当于一个数组，每个成员对应一个被 `rejected` 的操作所抛出的错误。

## Promise.resolve()

有时需要将现有对象转为 `Promise` 对象，`Promise.resolve()` 方法就起到这个作用。

`Promise.resolve()` 等价于下面的写法。

```javascript
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

- 参数是一个 `Promise` 实例

如果参数是 `Promise` 实例，那么 `Promise.resolve` 将不做任何修改、原封不动地返回这个实例。

- 参数是一个 `thenable` 对象

`Promise.resolve()` 方法会将这个对象转为 `Promise` 对象，然后就立即执行 `thenable` 对象的 `then()` 方法。

- 参数不是具有 `then()` 方法的对象，或根本就不是对象

如果参数是一个原始值，或者是一个不具有 `then()` 方法的对象，则 `Promise.resolve()` 方法返回一个新的 `Promise` 对象，状态为 `resolved`。由于原始值不属于异步操作（判断方法是字符串对象不具有 `then` 方法），返回 `Promise` 实例的状态从一生成就是 `resolved` ，所以回调函数会立即执行。`Promise.resolve()` 方法的参数，会同时传给回调函数。

- 不带有任何参数

`Promise.resolve()` 方法允许调用时不带参数，直接返回一个 `resolved` 状态的 `Promise` 对象。

## Promise.reject()

`Promise.reject(reason)` 方法也会返回一个新的 `Promise` 实例，该实例的状态为 `rejected`。

