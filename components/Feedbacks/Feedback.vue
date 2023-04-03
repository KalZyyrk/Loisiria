<template>
    <article>
        <img :src="require(`~/assets/img/${image}`)" :alt="name">

        <Rates :rates="rate" />
    </article>
</template>

<script>
import Rates from '@/components/Rates.vue';

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        rate: {
            type: Number,
            required: true
        }
    },
    components: { Rates },

}
</script>

<style scoped></style>