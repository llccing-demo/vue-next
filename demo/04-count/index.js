const { reactive, toRefs } = Vue
const App = {
  template: `
    <div>
      <h3>count: {{count}}</h3>
      <button @click="handlerCountAdd"> click ++ </button>
    </div>
  `,
  setup() {
    const state = reactive({ count: 0 })
    const handlerCountAdd = () => {
      state.count++
      console.log(state.count)
    }
    return {
      /**
       * ref 可以用来创建单个响应式对象
       * toRefs 的作用是吧一组的响应式对象拆成单个的响应式对象，这样就可以在模板中直接访问
       */
      ...toRefs(state),
      handlerCountAdd
    }
  }
}

Vue.createApp(App).mount('#app')
