<template>
  <div id="app">
    <Header></Header>
    <Contents></Contents>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import dummyData from './dummy.json'
import Contents from './components/Contents.vue'
import Header from './components/Header.vue'
export default {
  components: {
    Header,
    Contents,
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapMutations([
      'setFormData'
    ]),
    ...mapActions([
      'setData',
    ]),
    fetchData() {
      const response = dummyData;
      const {target, messages} = response;
      this.setData(response)

      const formData = messages.filter((item) => {
        return item.type === target
      }).map((list) => {
        return {id: list.id, label: null}
      })

      this.setFormData(formData)
      
    }
  }
}
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
