const { reactive } = Vue

const App = {
  template: `
    <div>
      <input v-model="state.value" /> 
      <h3>{{state.value}}</h3>
    </div>
  `,
  setup() {
    const state = reactive({ value: '' })

    /**
     * 注意这里如果用扩展运算符，template 中直接取 value 不能实现双向绑定。为啥？
     * {
     * ...state
     * }
     * 
     */
    return {
      state
    }
  }
}

Vue.createApp(App).mount('#app')