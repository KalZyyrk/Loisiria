<template>
    <section>
        <h2>Nos coups de coeur</h2>
        <ActivitiesGallery />
    </section>
</template>

<script>
import ActivitiesGallery from './ActivitiesGallery.vue'
export default {
    components: {
        ActivitiesGallery
    }
}
</script>

<style scoped>
section {
    padding: 20px;
}

h2 {
    margin-left: 15px;
    font-size: 1.2rem;
    margin-bottom: 20px;
}

@media screen and (min-width: 780px) {
    h2 {
        font-size: 1.5rem;
    }
}
</style>