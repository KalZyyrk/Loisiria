<template>
    <div class="rates">
        <font-awesome-icon :key="rate" :icon="['fas', 'star']" :class="rates < rate ? 'gray ' + page : 'green ' + page"
            v-for=" rate in range" />
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
        rates: Number,
        page: String
    }
}
</script>

<style scoped>
.activity {
    height: 10px;
    width: 10px !important;
}

.feedback {
    height: 13px;
    width: 20px;
}

.green {
    color: var(--color-green);
}

.gray {
    color: var(--color-mid-gray);
}
</style>