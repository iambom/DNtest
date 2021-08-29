<template>
  <div class="conversation-container">
      <MessageRow v-for="list in messages" :key="list.id" :list="list"></MessageRow>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageRow from './MessageRow.vue'
export default {
  components: { MessageRow },
  computed: {
    ...mapGetters([
      'messages',
    ])
  }

}
</script>