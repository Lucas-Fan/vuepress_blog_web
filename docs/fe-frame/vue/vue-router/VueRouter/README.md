# 代码

```javascript
export default class VueRouter {
  // ...
  constructor (options: RouterOptions = {}) {
    this.app = null
    this.apps = []
    this.options = options
    this.beforeHooks = []
    this.resolveHooks = []
    this.afterHooks = []
    this.matcher = createMatcher(options.routes || [], this)

    let mode = options.mode || 'hash'
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    if (!inBrowser) {
      mode = 'abstract'
    }
    this.mode = mode

    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }

  match (
    raw: RawLocation,
    current?: Route,
    redirectedFrom?: Location
  ): Route {
    return this.matcher.match(raw, current, redirectedFrom)
  }

  get currentRoute (): ?Route {
    return this.history && this.history.current
  }

  init () {}
  beforeEach () {}
  beforeResolve () {}
  afterEach () {}
  onReady () {}
  onError () {}
  push () {}
  replace () { }
  go () {}
  back () { }
  forward () { }
  getMatchedComponents () { }
  resolve ( ) { }
  addRoutes () { }
}
```

# 变量

- `this.app`

用于存储当前 `vue` 实例的 `this`，并且存入数组 `apps`。

- `this.apps`

用于判断实例是否被初始化。

- `options`

存储路由配置

- `history`

不同模式路由切换策略

- `fallback`

用来判断当前 `mode = 'hash'` 是不是通过降级处理的

# 模式处理

- 首先根据 `mode` 来确定所选的模式，如果当前环境不支持 `history` 模式，会强制切换到 `hash` 模式；
- 如果当前环境不是浏览器环境，会切换到 `abstract` 模式下。然后再根据不同模式来生成不同的 `history` 操作对象。

# init

```javascript
  init (app: any /* Vue component instance */) {
    // ...
    this.apps.push(app)

    // main app already initialized.
    if (this.app) {
      return
    }

    this.app = app

    const history = this.history // 在 constructor 中赋值路由切换策略

    if (history instanceof HTML5History) {
      history.transitionTo(history.getCurrentLocation())
      // 路由切换动作 transitionTo
    } else if (history instanceof HashHistory) {
      const setupHashListener = () => {
        history.setupListeners()
      }
      history.transitionTo(
        history.getCurrentLocation(),
        setupHashListener,
        setupHashListener
      )
      // 路由切换动作 transitionTo
    }

    // 监听路由切换
    history.listen(route => {
      this.apps.forEach((app) => {
        app._route = route
      })
    })
  }
```