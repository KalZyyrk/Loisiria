<template>
    <article :style="{ 'background-image': 'url(' + activity.picture + ')' }">
        <div v-if="activity.popular" class="popular">Populaire</div>
        <div class="roll" :class="isActive ? 'active' : ''">
            <div class="chevron" @click="toggleActive" :style="isActive ? { 'rotate': '180deg' } : { 'rotate': '0deg' }">
                <font-awesome-icon :icon="['fas', 'chevron-circle-up']" />
            </div>
            <div class="info">
                <div class="nameLocation">
                    <a href="#">
                        <h3> {{ activity.name }}</h3>
                    </a>
                    <p class="address">{{ activity.city }}, {{ activity.country }}</p>
                </div>
                <p class="price">A Partir de <strong> {{
                    activity.price }} €</strong></p>
            </div>
            <div class="hiddenInfo">
                <Rates :rates="activity.rating" />
                <p class="duration">duree <strong>{{ activity.duration }}</strong></p>
            </div>
        </div>
    </article>
</template>

<script>
import Rates from "@/components/Rates.vue";
export default {

    data() {
        return {
            isActive: false,
        }
    },
    props: {
        activity: Object
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive
        }
    },
    components: {
        Rates
    }
}
</script>

<style scoped>
article {
    height: 150px;
    width: calc(50% - 15px);
    box-shadow: 0 3px 4px var(--color-light-gray);
    border-radius: 10px 10px 0 0;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    overflow: hidden;
}

.roll {
    position: relative;
    background-color: white;
    height: 50%;
    padding: 5px;
    transition: 500ms;
    margin-bottom: -25%;
}

.active {
    margin-bottom: 0;
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
    transition: 500ms;
}

svg {
    color: white;
}

.info {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.nameLocation {
    max-width: 50%;
}

a {
    color: var(--color-black);
    text-decoration: none;
}

h3 {
    font-size: 10px;
    margin-bottom: 5px;
    white-space: nowrap;
}

h3:hover {
    text-decoration: underline;
}

.address {
    font-size: 8px;
    text-transform: capitalize;
}

.price,
.duration {

    font-size: 0.5rem;
    text-transform: uppercase;
    transition: 500ms;
}

strong {
    font-size: 12px;
}

.popular {
    text-transform: uppercase;
    position: absolute;
    font-weight: 700;
    color: white;
    font-size: 10px;
    background-color: var(--color-green);
    top: 5px;
    right: 5px;
    border-radius: 2px;
    padding: 3px 5px;
}

.hiddenInfo {
    position: absolute;
    bottom: 10px;
    right: 5px;
    left: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

@media screen and (min-width: 780px) {
    article {
        width: calc(25% - 30px);
    }

    .roll {
        margin-bottom: -15%;
    }

    .active {
        margin-bottom: 0;
    }
}
</style>