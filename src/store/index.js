import Vue from 'vue'
import Vuex from 'vuex'  // 1、引入vuex
import axios from 'axios'

Vue.use(Vuex) // 2、作为插件使用

// 3、定义一个容器
let store = new Vuex.Store({
  state: {
    count: 100,
    title: '',
    list: []
  },
  getters: { // 对state中的数据进一步处理
    filterCount (state) {
      return state.count >= 120 ? 120 : state.count
    }
  },
  mutations: { // mutation中改变状态 都是同步操作 有异步操作就放到action中
    add (state, payload) {
      // if (state.count >= 120) {
      //   return
      // }
      state.count += payload.n
    },
    minus (state, payload) {
      state.count -= payload.n
    },
    changeTitle (state, payload) {
      state.title = payload.title
    },
    changeList (state, list) {
      state.list = list
    }
  },
  actions: { // 异步操作要写在actions中，然后再提交一个mutation
    addAction (context) { // context中包含了跟上面实例中一样的方法 但是指的不是上面的实例
      setTimeout(() => {
          // 改变状态 提交mutation
        context.commit('add', {n: 5})
      }, 1000)
    },
    getListAction ({commit}) {
      axios.get('http://easy-mock.com/mock/598d8098a1d30433d85e5e46/example/list1')
      .then((data) => {
        // console.log(data.data)
        commit('changeList', data.data) // 拿到数据后提交一个mutation 然后去改变store中的状态
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

})

export default store // 4、把上面new的vuex实例导出去
