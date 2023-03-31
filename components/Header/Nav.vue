<template>
    <nav>
        <a href="/"><font-awesome-icon :icon="['fas', 'book-open']" class="nav-icon" />Réservation</a>
        <a href="/"> <font-awesome-icon :icon="['fas', 'mail-bulk']" class="nav-icon" /> Contact</a>
    </nav>
</template>

<script>
export default {

}
</script>
<style scoped>
nav {
    display: flex;
    justify-content: center;
    gap: 35px;
}

a {
    text-decoration: none;
    color: var(--color-salmon);
    font-size: 1rem;
}

.nav-icon {
    margin-right: 8px;
}
</style>