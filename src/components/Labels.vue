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
        <li v-for="(label, index) in labelsList" :key="index" @click="clickList">
          <div class="list-wrapper">
            <span class="topic">{{label.topic}}</span>
            <span class="description">{{label.description}}</span>
          </div>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
  methods: {
    clickList() {
      console.log(this.labels)
    }
  },
}
</script>