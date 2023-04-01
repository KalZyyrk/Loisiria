<template>
    <main class="font-police">
        <Header />
        <Filters />
        <Activities />
        <Footer />
    </main>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Filters from '@/components/Filters/Filters.vue';
import Activities from '../components/Activities/Activities.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
    components: {
    Header,
    Filters,
    Activities,
    Footer
}
}
</script>
