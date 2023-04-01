<template>
    <section>
        <h2>Nos retours clients</h2>
        <Feedback v-for="feedback in feedbacks" :feedback="feedback"/>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                feedbacks: [
                    
                ]
            }
        }
    }
</script>

<style scoped>

</style>