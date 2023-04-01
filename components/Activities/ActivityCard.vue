<template>
    <article :style="{ 'background-image': 'url(' + activity.picture + ')' }">
        <div class="roll">
            <font-awesome-icon :icon="['far', 'chevron-circle-up']" />
            <h3> {{ activity.name }}</h3>
        </div>
    </article>
</template>

<script>



export default {
    props: {
        activity: Object
    }
}
</script>

<style scoped>
article {
    height: 100px;
    width: 155px;
    box-shadow: 0 3px 4px var(--color-light-gray);
    border-radius: 10px 10px 0 0;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
}

.roll {
    position: relative;
    background-color: white;
}
</style>