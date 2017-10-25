<template lang="html">
  <section class="wrap">
    <div class="searchIpt" clearFix>
      <div class="content">
        <ul>
          <li @click="addList">姓名</li>
        </ul>
      </div>
       <select-input :is-show.sync="listShow"></select-input> <!--双向数据绑定  -->
      <selectList v-show="listShow"></selectList>
    </div>
  </section>
</template>

<script>
import selectInput from '@/components/selectInput'
import selectList from '@/components/selectList'
import axios from 'axios'
// let listData = [
//   {title: 'javascript'},
//   {title: 'java'}
//   {title: 'math'},
//   {title: 'Chinese'},
//   {title: 'C++'}
// ]
export default {
  data () {
    return {
      title: '',
      listShow: false
      // listData: listData
    }
  },
  components: {
    selectInput,
    selectList
  },
  methods: {
    addList () {
      axios.get('http://easy-mock.com/mock/598d8098a1d30433d85e5e46/example/listUl')
      .then((data) => {
        console.log(data, 'data')
      })
    }
  }

}
</script>

<style lang="css" scoped>
  .searchIpt{
    width:394px;
    height:313px;
    background:green;
    margin:0 auto;
    padding:10px;
  }
</style>
