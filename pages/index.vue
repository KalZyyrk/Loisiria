<template>
    <main class="font-police">
        <Header />
        <Filters />
    </main>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Filters from '@/components/Filters/Filters.vue';
export default {
    components: {
        Header,
        Filters
    }
}
</script>
