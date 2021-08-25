<template>
  <div id="app">
    <Header></Header>
    <Contents></Contents>
  </div>
</template>

<script>
import Contents from './components/Contents.vue'
import Header from './components/Header.vue'
export default {
  components: {
    Header,
    Contents,
  },
}
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
