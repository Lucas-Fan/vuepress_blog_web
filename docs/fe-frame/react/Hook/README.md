## useState

在不编写 `class` 组件的情况下使用 `state` 以及其他的 `React` 特性。

```javascript
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect

`useEffect` 就是一个 `Effect Hook`，给函数组件增加了操作副作用的能力。它跟 `class` 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 `API`。

```javascript
// 相当于 componentDidMount 和 componentDidUpdate:
useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
}, [count]);
```

`useEffect` 在组件内声明，所以可以访问到 `props` 和 `state`。在每次渲染后调用副作用函数，包括第一次渲染的时候。

可以在副作用函数中返回一个函数来指定如何清除副作用。

```javascript
useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
}, [props.friend.id]);
```

> 如果只想执行一次 `effect` (仅在组件挂载和卸载时执行)，第二个参数传递一个空数组。

## 自定义 Hook

约定俗成，自定义 `Hook` 使用 `use` 开头

## useContext

## 注意

- 不要在循环，条件或嵌套函数中调用 `Hook`， 确保总是在你的 `React` 函数的最顶层调用他们。
  - 那么 `React` 怎么知道哪个 `state` 对应哪个 `useState`？答案是 `React` 靠的是 `Hook` 调用的顺序。
  - 在循环，条件或嵌套函数中调用 `Hook`，会使得 `Hook` 调用顺序错乱。 
- 在 `React` 的函数组件中调用 `Hook`
- 在自定义 `Hook` 中调用其他 `Hook` 

