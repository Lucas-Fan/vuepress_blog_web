# 代码

```javascript
export function install (Vue) {
 // ...
  // 混入 beforeCreate 钩子
  Vue.mixin({
    beforeCreate () {
      // 在option上面存在router则代表是根组件 
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        // 执行_router实例的 init 方法
        this._router.init(this)
        // 为 vue 实例定义数据劫持
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        // 非根组件则直接从父组件中获取
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })
 
  // 设置代理，当访问 this.$router 的时候，代理到 this._routerRoot._router
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })
  // 设置代理，当访问 this.$route 的时候，代理到 this._routerRoot._route
  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })
 
  // 注册 router-view 和 router-link 组件
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  // Vue钩子合并策略
  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
  // ...
}
```
