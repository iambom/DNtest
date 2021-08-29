<template>
    <li @click="clickList" :class="{'active': isSelected}">
        <div class="list-wrapper">
            <span class="topic">{{label.topic}}</span>
            <span class="description">{{label.description}}</span>
        </div>
    </li>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    props: {
        label: Object,
    },
    computed: {
        ...mapState([
        'formData',
        'selectedMessage'
        ]),
        selectedMessageIndex() {
            return this.formData.findIndex((item) => item.id === this.selectedMessage)
        },
        isSelected() {
            return this.formData[this.selectedMessageIndex]?.label === this.label.topic
        }
    },
    methods: {
        ...mapMutations([
            'setFormData'
        ]),
        clickList() {
            const newFormData = this.formData;
            newFormData[this.selectedMessageIndex].label = this.label.topic
            this.setFormData(newFormData)
        }
    },
}
</script>

<style>

</style>