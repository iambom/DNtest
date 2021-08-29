<template>
<div :class="{'left': !isRight, 'right': isRight, 'active': isSelected}">
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
import { mapGetters } from 'vuex'
export default {
    props: {
        list: Object,
    },
    data() {
        return {
            isSelected: false,
        }
    },
    methods: {
        clickList() {
            this.isSelected = true;
        }
    },
    computed: {
    ...mapGetters([
      'target'
    ]),
    isRight() {
        return this.list.type === this.target
    }
    }
}
</script>

<style>

</style>