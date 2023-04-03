<template>
    <div class="search-bar">
        <div class="search-icon"><font-awesome-icon :icon="['fas', 'search']" /></div>
        <input v-model="localisation" class="text-area" type="text" placeholder="Ville, Pays">
        <input class="submit-btn" type="button" value="Rechercher" @click="searchLocation">
    </div>
</template>
<script>
export default {
    data() {
        return {
            localisation: ''
        }
    },
    methods: {
        searchLocation() {
            this.$store.dispatch('setInputValue', this.localisation)
        }
    }
}
</script>

<style scoped>
.search-bar {
    margin: auto;
    width: 90%;
    display: flex;
    height: 40px;
}

.search-icon {
    width: 13%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0 0 10px;
    border-top: 1px solid var(--color-mid-gray);
    border-left: 1px solid var(--color-mid-gray);
    border-bottom: 1px solid var(--color-mid-gray);
    color: var(--color-red);
}

.text-area {
    width: 60%;
    border-top: 1px solid var(--color-mid-gray);
    border-left: none;
    border-bottom: 1px solid var(--color-mid-gray);
    border-right: none;
    padding: 0 10px;
}

.text-area::placeholder {
    color: var(--color-dark);
}

.submit-btn {
    width: 40%;
    border-radius: 0 10px 10px 0;
    border-top: 1px solid var(--color-mid-gray);
    border-left: 1px solid var(--color-mid-gray);
    border-bottom: 1px solid var(--color-mid-gray);
    border-right: 1px solid var(--color-mid-gray);
    cursor: pointer;
}

@media screen and (min-width: 780px) {
    .search-bar {
        max-width: 300px;
        margin: 0 25px;
    }
}
</style>