<template>
    <li @click="clickList" :class="{'active': isSelected}">
        <div class="list-wrapper">
        <span class="topic">{{label.topic}}</span>
        <span class="description">{{label.description}}</span>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        label: Object,
    },
  data() {
    return {
      isSelected: false
    }
  },
  methods: {
    clickList() {
      this.isSelected = true;
    }
  },
}
</script>

<style>

</style>