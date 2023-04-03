<template>
    <article>
        <h3>{{ info.title }}</h3>
        <ul>
            <li v-for="line in info.info"><a href="#">{{ line }}</a></li>
        </ul>
    </article>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style scoped>
article {
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

h3 {
    color: var(--color-red);
    font-size: 18px;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 10px;
}

li {
    font-size: 12px;
    list-style: none;
}

a {
    text-decoration: none;
    color: var(--color-salmon);
}
</style>