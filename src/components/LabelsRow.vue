<template>
    <li @click="clickList" :class="{'active': isSelected}">
        <div class="list-wrapper">
            <span class="topic">{{label.topic}}</span>
            <span class="description">{{label.description}}</span>
        </div>
    </li>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    props: {
        label: Object,
    },
    computed: {
        ...mapState([
            'formData',
            'selectedMessage',
        ]),
        ...mapGetters([
            'nextMessageId',
            'selectedMessageIndex'
        ]),
        isSelected() {
            return this.formData[this.selectedMessageIndex]?.label === this.label.topic
        },
        isLastIndex() {
            return this.selectedMessageIndex !== this.formData.length - 1
        }
        
    },
    methods: {
        ...mapMutations([
            'setFormData',
            'setSelectedMessage'
        ]),
        clickList() {
            if(this.selectedMessage === null) return;

            const prevLabel = this.formData[this.selectedMessageIndex].label;
            console.log(prevLabel)
            const newFormData = this.formData;
            newFormData[this.selectedMessageIndex].label = this.label.topic
            this.setFormData(newFormData);

            if(prevLabel === null && this.isLastIndex) this.setSelectedMessage(this.nextMessageId)
        }
    },
}
</script>

<style>

</style>