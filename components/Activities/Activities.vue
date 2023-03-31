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
   h2 {
    font-size: 1.2rem;
    margin-bottom: 20px;
} 
</style>