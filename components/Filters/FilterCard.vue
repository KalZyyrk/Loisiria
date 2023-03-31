<template>
    <button class="filter" @click="selectCategory">
        <font-awesome-icon :icon="filter.icon" />
        <h3>{{ filter.name }}</h3>
    </button>
</template>

<script>

export default {
    data(){
        return{
            category : ''
        }
    },
    props: {
        filter: Object
    },
    methods: {
        selectCategory() {
            console.log(this.filter.category);
        }
    },
}
</script>

<style scoped>
.filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    height: 64px;
    width: 64px;
    border: 1px solid var(--color-light-gray);
    border-radius:15px;
    background: white;
    box-shadow: 0 3px 4px var(--color-light-gray);
    cursor: pointer;
}
h3 {
    font-size: 0.5rem;
}
svg {
    color: var(--color-green);
}
</style>