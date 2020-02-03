const { reactive, toRefs, computed } = Vue
const App = {
  template: `
    <div>
      reverse: {{ reverseWords }}
      <input v-model="words" />
    </div>
  `,
  setup() {
    const state = reactive({
      words: '123456',
      // 这里使用 computed 实现了字符串的反转
      reverseWords: computed(() => state.words.split('').reverse().join(''))
    })

    return {
      ...toRefs(state)
    }
  }
}

Vue.createApp(App).mount('#app')