
<template>
    <section>
        <h2>Nos retours clients</h2>
        <Feedback v-for="feedbackData in feedbackDatas" v-bind:key="feedbackData.id" :name="feedbackData.name"
            :image="feedbackData.userPicture" :rate="feedbackData.rate" />
    </section>
</template>

<script>
import Feedback from './Feedback.vue';
import feedbackDatas from '@/data/feedbackData.json'
export default {
    data() {
        return {
            feedbackDatas
        }
    }, components: {
        Feedback
    }
}
</script>

<style scoped></style>