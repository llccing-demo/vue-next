const { reactive, provide, inject, watch } = Vue

const userData = Symbol()
const Comp1 = {
  template: `<h4>Comp1</h4>`,
  setup() {
    const user = reactive({ name: 'aaa', age: 19 })
    console.log(provide)
    console.log(userData)
    console.log(user)
    provide(userData, user)
  }
}


const Comp2 = {
  template: `<h4>Comp2</h4>`,
  setup() {
    // TODO 这里并不能拿到 Comp1 的数据
    const user = inject(userData, {})
    console.log('inject', user)
  }
}

const App = {
  template: `
    <h3>this a main App</h3>
    <Comp1 />
    <Comp2 />
  `,
  components: {
    Comp1,
    Comp2
  }
}

Vue.createApp(App).mount('#app')