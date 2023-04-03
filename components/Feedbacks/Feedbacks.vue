
<template>
    <section>
        <h2>Nos retours clients</h2>
        <Feedback v-for="feedbackData in feedbackDatas" v-bind:key="feedbackData.id" :name="feedbackData.name"
            :image="feedbackData.userPicture" :rate="feedbackData.rate" :desc="feedbackData.feedback" />

        <ButtonFeed class="btn" />
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

<style scoped>
section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 45px;
    background-color: var(--background);
    justify-content: center;
}

h2 {
    margin-left: 15px;
    font-size: 1.2rem;
    margin-bottom: 20px;
}

@media screen and (min-width: 780px) {
    section {
        flex-direction: row;
        flex-wrap: wrap;
    }

    h2 {
        width: 100%;
    }
}
</style>