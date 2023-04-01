<template>
    <article :style="{ 'background-image': 'url(' + activity.picture + ')' }">
        <div class="roll">
            <div class="chevron"><font-awesome-icon :icon="['fas', 'chevron-circle-up']" /></div>
            <h3> {{ activity.name }}</h3>
            <div class="Info">
                <p class="">{{ activity.city }}, {{ activity.country }}</p>
                <p>A Partir de <strong> {{ activity.price }} €</strong></p>
            </div>
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
    height: 120px;
    width: 160px;
    box-shadow: 0 3px 4px var(--color-light-gray);
    border-radius: 10px 10px 0 0;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
}

.roll {
    width: 100%;
    position: relative;
    background-color: white;
    display: flex;
    height: 35%;
    justify-content: space-between;
}

.chevron {
    top: calc(-15px/2);
    left: calc(50% - 15px/2);
    position: absolute;
    display: flex;
    background-color: var(--color-mid-gray);
    width: 16px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
}

svg {
    color: white;
}

h3 {
    font-size: 0.7rem;
}

.address p {
    font-size: 0.5rem;
    text-transform: capitalize;
}

.priceInfo p {
    font-size: 0.5rem;
    text-transform: uppercase;
}

strong {
    font-size: .8rem;
}
</style>