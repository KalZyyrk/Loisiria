<template>
    <div class="filter">
        <h3>{{ filter.name }}</h3>
        <font-awesome-icon :icon="filter.icon" />
    </div>
</template>

<script>
export default {
    props: {
        filter: Object
    }
}
</script>

<style scoped>
.filter {}
</style>