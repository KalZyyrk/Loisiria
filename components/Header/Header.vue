<template>
    <header>
        <div class='logo-nav'>
            <img src="@/assets/img/logo.png" alt="Loisira">
            <Nav />
        </div>
        <SearchBar />
    </header>
</template>

<script>
import Nav from '../Header/Nav.vue';
import SearchBar from '../Header/SearchBar.vue'

export default {
    components: {
        Nav,
        SearchBar
    }
}
</script>

<style scoped>
header {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.logo-nav {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

img {
    width: 45%;
    margin: 0 auto;
}

@media screen and (min-width: 780px) {
    header {
        flex-direction: row;
        justify-content: space-between;
        padding-top: 15px;
    }

    img {
        width: 80%;
    }
}
</style>