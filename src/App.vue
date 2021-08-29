<template>
  <div id="app">
    <Header></Header>
    <Contents :data="dummyData"></Contents>
  </div>
</template>

<script>
import dummyData from './dummy.json'
import Contents from './components/Contents.vue'
import Header from './components/Header.vue'
export default {
  components: {
    Header,
    Contents,
  },
  data() {
    return {
      dummyData
    }
  },
  created() {
    this.$store.dispatch('setData', this.dummyData)
  }
}
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
