<template lang="html">
  <div class="selectInput">
    <input type="text" name="" value="" @click="showInput" :value="title">
  </div>
</template>

<script>
export default {
  props: ['isShow'],
  computed: { // 子组件不能改变父组件的值 所以用计算属性
    initShow () {
      return this.isShow // return回来的值就是initShow的值
    },
    title () {
      return this.$store.state.title
    }
  },
  methods: {
    showInput () {
      this.$emit('update:isShow', !this.initShow) // update是vue中自定义的 只需传入需要改变的key 和改变后的值
    }
  }
}
</script>

<style lang="css" scoped>
  .selectInput{
    width:300px;
    height:50px;
    margin:0 auto;
    background: #fff;
    border-radius:5px;
    border:1px solid #aaa;
  }
  .selectInput input{
    width:100%;
    height:100%;
    border:none;
    outline:none;
  }
</style>
