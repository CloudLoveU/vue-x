<template lang="html">
  <div class="selectList">
    <ul class="">
      <li v-for="item in data"  @click="getTitleHandle(item.title)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ['data'],
  computed: {
    data () {
      return this.$store.state.list
    }
  },
  methods: {
    getTitleHandle (title) {
      // 改变vuex中状态
      this.$store.commit('changeTitle', {title: title})
    }
  },
  created () {
    // 获取数据
    this.$store.dispatch('getListAction')
  }
}
</script>

<style  scoped>
ul,li{
  padding:0;
  margin: 0;
}
  .selectList ul{
    width: 300px;
    margin:0 auto;
  }
  .selectList ul li{
    width:300px;
    height:50px;
    background:yellow;
    list-style-type: none;
    text-align: center;
    line-height:50px;
    border-bottom: 1px solid #fff;
  }
</style>
