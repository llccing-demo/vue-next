const { reactive } = Vue

const Child = {
  template: `
    <div>
      {{title}}
    </div>
  `,
  setup(props, context) {
    console.log(context)
    // 输出内容： {"attrs":{"title":"test props"},"slots":{}}
    console.log(props)
    // 输出内容： {"title":"test props"}
    return {
      // 这里需要注意，凡是需要展示到template中的属性，都需要暴露出去。
      ...props
    }
  }
}

const App = {
  /**
   * 注意这里已经实现了 多个根节点
   * 
   * 浏览器的dom中按如下显示
   * <div id="app">
   * <!--fragment-0-start-->
   * <div>666</div>
   * <div>test props</div>
   * <!--fragment-0-end--></div>
   */
  template: `
    <div>{{message}}</div>
    <Child title="test props" />
  `,
  setup() {
    const state = reactive({ message: 666 });
    return {
      ...state
    }
  },
  components: {
    Child
  }
}

Vue.createApp(App).mount('#app')