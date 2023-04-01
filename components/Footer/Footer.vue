<template>
    <footer>
        <FooterInfo v-for="info in footerInfo" :info="info" :key="info.title"/>
        <FooterNews />
        <FooterCopy />
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

</style>