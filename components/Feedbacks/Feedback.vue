<template>
    <div>
        <Rates :rates="feedback.rating" />
    </div>
</template>

<script>
import Rates from '@/components/Rates.vue';

export default {
    props: {
        feedback: Object
    },
    components: { Rates }
}
</script>

<style scoped></style>