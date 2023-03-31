<template>
    <article>
        <FilterCard v-for="filter in filters" :key="filter.name" :filter="filter" />
    </article>
</template>

<script>
import FilterCard from './FilterCard.vue';
export default {
    data() {
        return {
            filters: [
                {
                    name: "Sport hiver",
                    icon: ['fas', 'skiing'],
                    category: 'winter'
                },
                {
                    name: "Aquatique",
                    icon: ['fas', "swimmer"],
                    category: 'water'
                },
                {
                    name: "Randonnée",
                    icon: ["fas", "hiking"],
                    category: 'hiking'
                },
                {
                    name: "Aérien",
                    icon: ['fab', 'fly'],
                    category: 'aerial'
                },
                {
                    name: "Sport d'équipe",
                    icon: ['fas', "basketball-ball"],
                    category: 'team'
                }
            ],
        };
    },
    components: { FilterCard }
}
</script>

<style scoped></style>