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
    align-items: flex-end;
}

h3 {
    margin-top: 10px;
    color: var(--color-red);
    width: 100%;
    font-size: 14px;
}

input {
    margin-top: 5px;
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

@media screen and (min-width: 780px) {
    article {
        flex-direction: column;
        flex-grow: 1;
    }

    h3 {
        margin-top: 0;
        text-align: end;
    }

    input {
        width: auto;
    }
}
</style>