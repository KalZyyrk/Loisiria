<template>
    <main class="font-police">
        <Header />
        <Filters />
        <Activities />
    </main>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Filters from '@/components/Filters/Filters.vue';
import Activities from '../components/Activities/Activities.vue';
export default {
    components: {
    Header,
    Filters,
    Activities
}
}
</script>
