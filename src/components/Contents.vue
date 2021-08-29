<template>
<div class="container">
  <div class="contents">
    <Guide></Guide>
    <Conversation></Conversation>
    <Labels></Labels>
  </div>
  <ToolBox></ToolBox>
</div>
</template>

<script>
import Conversation from './Conversation.vue';
import Guide from './Guide.vue';
import Labels from './Labels.vue';
import ToolBox from './ToolBox.vue'

export default {
  props: ['data'],
  components: {
    Guide,
    Conversation,
    Labels,
    ToolBox
  }, 
}
</script>

<style>
.container {
  max-width: 1440px;
  height: calc(100% - 128px);
  margin :0 auto;
}
.contents {
  height: 100%;
  padding: 10px;
  font-family: SpoqaHanSans;
  display: flex;
}
</style>