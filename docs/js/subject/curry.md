---
title: 柯里化
author: FZYT
date: "2021-10-18"
meta:
  - name: 柯里化
---

## 柯里化

### 第一版

```javascript
var curry = function(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};
```

### 第二版

<Vssue :title="$title" />
