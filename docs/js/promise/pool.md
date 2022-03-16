---
title: Promise 控制并发量
author: FZYT
date: "2022-03-16"
meta:
  - name: Promise 控制并发量
---

## Promise 控制并发量

### Promise 对象可以

### 第一版

```javascript
let urls = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let pool = [];
let maxTask = 5;

let quest = function(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`任务${url}完成`);
    }, 2000);
  });
};

let addTask = function(url) {
  let task = quest(url);
  pool.push(task);
  task.then((res) => {
    console.log("执行完", res);
    pool.splice(pool.indexOf(task), 1);
    console.log(`${url} 结束，当前并发数：${pool.length}`);
    let nextUrl = urls.shift();
    if (nextUrl !== undefined) {
      addTask(nextUrl);
    }
  });
};

while (pool.length < 5) {
  let url = urls.shift();
  addTask(url);
}
```

### 第二版

```javascript
let urls = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let pool = [];
let maxTask = 5;

let quest = function(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`任务${url}完成`);
    }, 2000);
  });
};

let addTask = function(url) {
  let task = quest(url);
  pool.push(task);
  task.then((res) => {
    pool.splice(pool.indexOf(task), 1);
    console.log("执行完", res);
    console.log(`${url} 结束，当前并发数：${pool.length}`);
  });
};

let run = function(task) {
  task.then((res) => {
    let url = urls.shift();
    if (url !== undefined) {
      addTask(url);
      run(Promise.race(pool));
    }
  });
};

while (pool.length < 5) {
  let url = urls.shift();
  addTask(url);
}

let task = Promise.race(pool);
run(task);
```

### 第三版

<Vssue :title="$title" />
