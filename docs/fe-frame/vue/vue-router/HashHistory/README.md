# constructor


```javascript
// 继承 History 基类
export class HashHistory extends History {
  constructor (router: VueRouter, base: ?string, fallback: boolean) {
    // 调用基类构造器
    super(router, base)

    // 如果说是从 history 模式降级来的
    // 需要做降级检查
    if (fallback && this.checkFallback()) {
      // 如果降级 且 做了降级处理 则什么也不需要做
      return
    }
    // 保证 hash 是以 / 开头
    ensureSlash()
  }
// ...
}

function checkFallback (base) {
    // 得到除去 base 的真正的 location 值
    const location = getLocation(this.base)
    if (!/^\/#/.test(location)) {
      // 如果说此时的地址不是以 /# 开头的
      // 需要做一次降级处理 降级为 hash 模式下应有的 /# 开头
      window.location.replace(
        cleanPath(this.base + '/#' + location)
      )
      return true
    }
}

// 保证 hash 以 / 开头
function ensureSlash (): boolean {
  // 得到 hash 值
  const path = getHash()
  // 如果说是以 / 开头的 直接返回即可
  if (path.charAt(0) === '/') {
    return true
  }
  // 不是的话 需要手工保证一次 替换 hash 值
  replaceHash('/' + path)
  return false
}

export function getHash (): string {
  // 因为兼容性问题 这里没有直接使用 window.location.hash
  // 因为 Firefox decode hash 值
  const href = window.location.href
  const index = href.indexOf('#')
  // 如果此时没有 # 则返回 ''
  // 否则 取得 # 后的所有内容
  return index === -1 ? '' : href.slice(index + 1)
}
```