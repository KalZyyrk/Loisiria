<template>
    <div>
        <ActivityCard v-for="activity in filterActivities" :activity="activity" :key="activities.name" />
        <p :style="filterActivities.length == 0 ? { 'display': '' } : { 'display': 'none' }">Pas d'activité pour
            cette
            categorie</p>
    </div>
</template>

<script>
import ActivityCard from './ActivityCard.vue';
import activities from '@/data/activitiesData.json';
export default {
    data() {
        return {
            activities,
            filterActivities: activities
        }
    },
    methods: {
        setfilterActivities() {
            return this.activities.filter(activity => activity.category == this.getCategory)
        }
    },
    components: { ActivityCard },
    computed: {
        getCategory() {
            return this.$store.getters.getCategory
        },
    },
    watch: {
        getCategory() {
            if (this.getCategory == 'all') {
                this.filterActivities = activities
            } else {
                this.filterActivities = this.setfilterActivities();
                console.log(this.filterActivities.length);
            }
        }
    }
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