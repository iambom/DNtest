<template>
  <div class="toolbox-container">
      <button class="btn-prev" @click="onClick(prevMessageId)">PREV</button>
      <button class="btn-next" @click="onClick(nextMessageId)">NEXT</button>
      <button class="btn-submit" @click="onSubmit">SUBMIT</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import dummyData from '../dummy.json'
export default {
  computed: {
    ...mapState([
        'formData',
        'selectedMessage',
    ]),
    ...mapGetters([
      'prevMessageId',
      'nextMessageId',
      'formDataTotalLength'
    ])
  },
  methods: {
    ...mapMutations([
      'setFormData',
      'setSelectedMessage',
      'setCreditPoint',
      'resetData'
    ]),
    ...mapActions([
      'setData',
    ]),
    onClick(id) {
      if(this.selectedMessage === null || id === undefined) return;
      this.setSelectedMessage(id)
    },
    onSubmit() {
      let isSubmit = false;
      for (let i = 0; i < this.formDataTotalLength; i++) {
        if(this.formData[i]?.label === null) {
          isSubmit = false;
          break;
        } else {
          isSubmit = true;
        }
      }

      if (isSubmit) {
        console.log(this.formData);
        this.setCreditPoint();
        this.setSelectedMessage(null)
        this.fetchData();
      } else {
        console.log('레이블링을 완료하지 않았습니다.');
      }
    },
    fetchData() {
      const response = dummyData;
      const {target, messages} = response;
      this.setData(response)

      const formData = messages.filter((item) => {
        return item.type === target
      }).map((list) => {
        return {id: list.id, label: null}
      });
      this.setFormData(formData);
    }
  }
}
</script>