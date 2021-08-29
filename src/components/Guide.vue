<template>
  <div class="guide-container">
      <div class="task-instruction">
          <div class="title-wrpper">
            <span class="title">TASK INSTRUCTION</span>
            <span class="sub-title">Tell us what the topic is about</span>
          </div>
          <p class="description">AI can't talk without talking about context. Let's share the topics in each message so that you can talk smarter ~!
<br /><br />
Click on a topic in the list on the right for each message shown in the center of the screen :)</p>
      </div>
      <div class="progress-container">
          <span class="good-job">Good Job!</span>
          <span class="description">I think AI will be smart soon :)</span>
          <div class="progress-bar">
            <div class="text-wrapper">
                <span class="teaching-progress">Teaching Progress</span>
                <span class='percentage'>{{percentage}}% ({{labeledLength}}/{{formDataTotalLength}})</span>
            </div>
            <div class="bar-track">
                <div class="bar" :style="{'width': `${percentage}%`}" ></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'formDataTotalLength',
      'labeledLength'
    ]),
    percentage() {
      return Math.round((this.labeledLength / this.formDataTotalLength) * 100)
    }
  }
}
</script>

<style>

</style>