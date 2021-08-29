<template>
  <div class="toolbox-container">
      <button class="btn-prev" @click="onClick(prevMessageId)">PREV</button>
      <button class="btn-next" @click="onClick(nextMessageId)">NEXT</button>
      <button class="btn-submit">SUBMIT</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
        'selectedMessage',
    ]),
    ...mapGetters([
      'prevMessageId',
      'nextMessageId'
    ])
  },
  methods: {
    ...mapMutations([
      'setSelectedMessage'
    ]),
    onClick(id) {
      if(this.selectedMessage === null || id === undefined) return;
      this.setSelectedMessage(id)
    },
  }
}
</script>