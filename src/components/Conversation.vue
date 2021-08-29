<template>
  <div class="conversation-container">
      <MessageLow v-for="list in messages" :key="list.id" :list="list"></MessageLow>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageLow from './MessageLow.vue'
export default {
  components: { MessageLow },
  computed: {
    ...mapGetters([
      'messages',
    ])
  }

}
</script>