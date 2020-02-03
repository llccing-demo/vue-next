const { reactive, toRefs, watch, effect, ref } = Vue
const App = {
  template: `
    <div>
      count: {{count}}
      <button @click="addCount">click ++</button>
    </div>
  `,
  setup() {
    const state = reactive({ count: 0, value: 1 })
    const addCount = () => {
      state.count++
    }

    // effect 和 watch 都能够监听到数据的变化。
    watch(
      () => state.count,
      value => {
        console.log('watch', state.count)
        console.log('watch', state.value)
      }
    )

    effect(() => {
      console.log('effect', state.count)
      console.log('effect', state.value)
    })

    return {
      ...toRefs(state),
      addCount
    }
  }
}

const AppEffect = {
  template: `
    <div>
      <button @click="addCount">click ++</button>
    </div>
  `,
  setup() {
    const r = ref(1)
    const s = ref(1)
    const t = ref(1)

    const addCount = () => {
      r.value *= 1
      s.value *= 2
      t.value *= 3
    }

    /**
     * effect 在响应式数据变化的时候就会执行，执行次数根据响应式数据的个数来决定
     * 这个例子中，addCount 方法执行时，同时更新三个 ref，effect 就会被执行3次。
     */
    effect(() => {
      console.log('effect', [r.value, s.value, t.value])
    })

    // 而 watch 执行次数和数据的个数没有关系，点击一次，执行一次
    watch([r, s, t], value => {
      console.log('watch', value)
    })

    return {
      addCount
    }
  }
}

Vue.createApp(AppEffect).mount('#app')
