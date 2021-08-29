<template>
<div :class="{'left': !isRight, 'right': isRight, 'active': isClicked}">
    <template v-if="isRight">
        <button @click="clickList">
            <span class="conversation" v-html="list.text"></span>
            <span class="create-at">{{list.created}}</span>
        </button>
    </template>
    <template v-else>
        <img :src="list.avatar" alt="avatar">
        <span class="conversation" v-html="list.text"></span>
        <span class="create-at">{{list.created}}</span>
    </template>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    props: {
        list: Object,
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState([
            'formData',
            'selectedMessage'
        ]),
        ...mapGetters([
            'target'
        ]),
        isRight() {
            return this.list.type === this.target
        },
        isClicked() {
            return this.selectedMessage === this.list.id
        },
        messageIndex() {
            return this.formData.findIndex((item) => item.id === this.list.id)
        },
        
    },
    methods: {
        ...mapMutations([
            'setSelectedMessage',
            'setFormData'
        ]),
        clickList() {
            this.setSelectedMessage(this.list.id)
        }
    },
}
</script>

<style>

</style>