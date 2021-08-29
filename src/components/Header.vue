<template>
    <div class="header-container">
    <header>
        <h1><img src="../assets/images/logo-white@2x.png" alt="Deep Natural AI" /></h1>
        <div class="credit-points"><span>{{creditPoint}}</span></div>
        <span class="avatar"><img src="../assets/images/avatar@2x.png" alt="avatar"></span>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'creditPoint'
    ])
  }
}
</script>