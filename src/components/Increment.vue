<template lang="html">
  <div class="">
    <h2>简易计算器</h2>
    <input type="button" name="" value="-" @click="minusHandel">
    <span>{{num}}</span>
    <input type="button" name="" value="+" @click="addHandel">
    <p>{{num2}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    num () {
      return this.$store.state.count
    },
    num2 () {
      return this.$store.getters.filterCount
    }
  },
  methods: {
    addHandel () {
      // 改变状态 提交一个mutation add
      // this.$store.commit('add', {
      //   n: 5
      // })
      // 触发一个action
      this.$store.dispatch('addAction')
    },
    minusHandel () {
      this.$store.commit({
        type: 'minus',
        n: 10
      })
    }
  }
}
</script>

<style lang="css">
</style>
