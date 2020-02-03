const { ref, reactive, toRefs } = Vue

function addCount(count) {
  count++
}

const App = {
  template: `
    <div>
      {{value}}
      <button @click="clickAddCount">click ++</button>
    </div>
  `,
  setup() {
    const value = ref(0)
    const clickAddCount = () => {
      // 这里需要注意，通过ref加1时，需要使用 value.value 的形式。
      value.value++
    }
    return { value, clickAddCount }
  }
}

const AppReactive = {
  template: `
    <div>
      {{value}}
      <button @click="clickAddCount">click ++</button>
      </div>
  `,
  setup() {
    const state = reactive({ value: 1 })

    const clickAddCount = () => {
      state.value++
      console.log(state)
    }
    /**
     * 如果直接用 ...state扩展运算方式，是非响应式的。
     * 改为 ...toRefs(state) 方式可实现响应式
     */
    return { ...toRefs(state), clickAddCount }
  }
}

const AppReactiveReturnState = {
  template: `
    <div>
      {{state.value}}
      <button @click="clickAddCount">click ++</button>
      </div>
  `,
  setup() {
    const state = reactive({ value: 2 })

    const clickAddCount = () => {
      state.value++
      console.log(state)
    }
    /**
     * 直接 return state 也可以
     * 但是这种方式的缺点就是，在模板中需要使用 state.value 的形式，不够简洁
     */
    return { state, clickAddCount }
  }
}

Vue.createApp(App).mount('#app1')
Vue.createApp(AppReactive).mount('#app2')
Vue.createApp(AppReactiveReturnState).mount('#app3')