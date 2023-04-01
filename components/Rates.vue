<template>
    <div class="rates">
        <font-awesome-icon :icon="['fas', 'star']" :class="rates < rate ? 'gray' : 'green'" v-for=" rate in range" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            range: [1, 2, 3, 4, 5]
        }
    },
    props: {
        rates: Number
    }
}
</script>

<style scoped>
svg {
    height: 10px;
    width: 10px;
}

.green {
    color: var(--color-green);
}

.gray {
    color: var(--color-mid-gray);
}
</style>