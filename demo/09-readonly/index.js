const { readonly } = Vue
const App = {
  template: `
    <div>
      {{version}}
    </div>
  `,
  setup(){
    // TODO 没有明白这个到底怎么用，先放这里
    let version = readonly(`1.1.3`)
    return {
      version
    }
  }
}
Vue.createApp(App).mount('#app')