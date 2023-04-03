<template>
    <article>
        <img :src="require(`~/assets/img/${image}`)" :alt="name" class="circleImg">
        <div class="desc">
            <h2 class="name">{{ name }}</h2>
            <p class="feedback">{{ desc }}</p>
            <Rates :rates="rate" page="feedback" />
        </div>
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
        },
        desc: {
            type: String,
            required: true
        }
    },
    components: { Rates },

}
</script>

<style scoped>
article {
    height: 85px;
    display: flex;
    width: 100%;
    gap: 15px;
}

.circleImg {
    border-radius: 50%;
    height: 100%
}

.desc {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

h2 {
    font-size: 18px;
    font-weight: 700;
}

p {
    font-size: 12px;
}

@media screen and (min-width: 780px) {
    article {
        width: calc(45% - 15px)
    }
}
</style>