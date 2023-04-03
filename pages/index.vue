<template>
    <main class="font-police">
        <Header />
        <Filters />
        <Activities />
        <Feedbacks />
        <Footer />
    </main>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Filters from '@/components/Filters/Filters.vue';
import Activities from '../components/Activities/Activities.vue';
import Footer from '../components/Footer/Footer.vue';
import Feedbacks from '../components/Feedbacks/Feedbacks.vue'

export default {
    components: {
        Header,
        Filters,
        Activities,
        Feedbacks,
        Footer
    }
}
</script>
<style>
main {
    margin: auto;
    max-width: 1200px;
}
</style>
