<template>
    <section>
        <h2>Rechercher par activité</h2>
        <FiltersChoice />
    </section>
</template>

<script>
import FiltersChoice from './FiltersChoice.vue';
export default {
    components: {
        FiltersChoice
    }
}
</script>

<style scoped>
section {
    background-color: var(--background);
    margin-top: 15px;
    padding: 25px;
}

h2 {
    font-size: 1.2rem;
}
</style>