<template>
    <div>
        <ActivityCard v-for="activity in activities" :activity="activity" :key="activities.name" />
    </div>
</template>

<script>
import ActivityCard from './ActivityCard.vue';
import activities from '@/data/activitiesData.json';
export default {
    data() {
        return {
            activities
        }
    },
    components: { ActivityCard }
}
</script>

<style scoped>
div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}
</style>