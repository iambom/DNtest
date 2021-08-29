<template>
  <div id="app">
    <Header></Header>
    <Contents :data="dummyData"></Contents>
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
  data() {
    return {
      dummyData
    }
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
      const res = dummyData;
      const {target, messages} = res;
      this.setData(res)

      const formData = messages.filter((item) => {
        return item.type === target
      }).map((list) => {
        return {id: list.id, label: null}
      })

      this.setFormData(formData)
      console.log(formData)
      
    }
  }
}
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
