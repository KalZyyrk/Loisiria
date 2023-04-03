<template>
    <button>
        Voir tous les avis
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
    font-size: 15px;
    letter-spacing: 2px;
    margin: 20px auto;
    background-color: var(--color-green);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 3px 4px var(--color-mid-gray);
}

@media screen and (min-width: 780px) {
    button {
        margin: 20px 30px 20px auto;
    }
}
</style>