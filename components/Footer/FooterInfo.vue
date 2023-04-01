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
h3 {
    color: var(--color-red);
}

ul {
    margin-left: 10px;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: var(--color-salmon);
}
</style>