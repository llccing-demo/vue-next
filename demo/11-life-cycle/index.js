const { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured } = Vue
const App = {
  template: `
    <div>
      {{count}}
    </div>
  `,
  setup() {
    let count = ref('hello world')

    onBeforeMount(() => {
      console.log('onBeforeMount', count)
    })
    onMounted(()=>{
      console.log('onMounted', count)
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', count)
    })
    onUpdated(() => {
      console.log('onUpdated', count)
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount', count)
    })
    onUnmounted(() => {
      console.log('onUnmounted', count)
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured', count)
    })
    return {
      count
    }
  }
}

Vue.createApp(App).mount('#app')