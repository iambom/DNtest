<template>
  <div class="labels-container">
    <div class="text-wrapper">
      <span class="title">{{title}}</span>
      <p class="description">{{description}}</p>
    </div>
    <div class="labels-wrapper">
      <span class="title">TOPIC</span>
      <span class="title">DESCRIPTION</span>
      <ul>
        <LabelsRow v-for="(label, index) in labelsList" :key="index" :label="label"></LabelsRow>
      </ul>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LabelsRow from './LabelsRow.vue'
export default {
  components: { LabelsRow },
  computed: {
    ...mapGetters([
      'labels'
    ]),
    title() {
      return this.labels.title
    },
    description() {
      return this.labels.description
    },
    labelsList() {
      return this.labels.list
    }
  },
}
</script>