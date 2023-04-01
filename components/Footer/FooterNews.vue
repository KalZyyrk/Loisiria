<template>
    <article>
        <h3>Inscrivez-vous à notre NewsLetter !</h3>
        <input type="text" placeholder="Adresse Email">
        <div class="social-media">
            <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        </div>
    </article>
</template>

<script>
export default {

}
</script>

<style scoped>
article {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 70px;
}

h3 {
    color: var(--color-red);
    width: 100%;
}

input {
    background-color: var(--color-light-gray);
    border: none;
    width: 50%;
    border-radius: 5px;
    padding: 5px;
}

.social-media {
    display: flex;
    width: auto;
    gap: 10px;
}

a {
    color: var(--color-red);
}
</style>