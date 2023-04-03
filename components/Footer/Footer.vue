<template>
    <footer>
        <FooterInfo v-for="info in footerInfo" :info="info" :key="info.title" />
        <FooterNews />
        <FooterCopy style="width: 100%;" />
    </footer>
</template>

<script>
import FooterInfo from './FooterInfo.vue';
import FooterNews from './FooterNews.vue';
import FooterCopy from './FooterCopy.vue'

export default {
    data() {
        return {
            footerInfo: [
                {
                    title: "Navigation",
                    info: ["Réservation", "Contact"]
                },
                {
                    title: "A propos de nous",
                    info: ["Notre équipe", "Nos conditions d'utilisations", "Nos conditions de vente"]
                }
            ]
        };
    },
    components: { FooterInfo, FooterNews, FooterCopy }
}
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
    padding: 20px 35px;
    position: relative;
}

@media screen and (min-width: 780px) {
    footer {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        gap: 30px;
    }
}
</style>