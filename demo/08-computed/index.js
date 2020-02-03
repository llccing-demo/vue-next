const { ref, computed } = Vue
const App = {
  template: `
    <div>
      count: {{count}}
      <button @click="addCount">click ++</button>
    </div>
  `,
  setup() {
    const refData = ref(0)
    // 跟 2.x 一致 computed 也是支持set 和 get 方法的
    let count = computed({
      get(){
        return refData.value
      },
      set(value){
        console.log('set', value)
        refData.value = value
      }
    })
    const addCount = () => {
      console.log('click', count.value)
      count.value++
    }

    return {
      count,
      addCount
    }
  }
}

Vue.createApp(App).mount('#app')