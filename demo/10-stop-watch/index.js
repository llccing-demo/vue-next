const { ref, watch } = Vue
const App = {
  template: `
    <div>
      count: {{count}}
      <button @click="stopWatch">stop watch</button>
      <button @click="addCount">click ++</button>
    </div>
  `,
  setup() {
    const count = ref(0)
    const addCount = () => {
      count.value++
    }

    const stopWatch = () => {
      watchIns()
    }
    
    // 执行watch返回的函数，即可停止
    const watchIns = watch(count, value => {
      console.log('watch', value)
    })

    return {
      count,
      addCount,
      stopWatch
    }
  }
}
Vue.createApp(App).mount('#app')