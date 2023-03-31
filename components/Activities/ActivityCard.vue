<template>
    <article>
        <img :src="image" alt="">
        {{ activity.name }}
    </article>
</template>

<script>
 
  export default {
        props: {
            activity: Object
        },
        computed:{
            activityImage() {
                return "@/assets/img/" + this.activity.picture
            }
        }    
    }
</script>

<style scoped>
    article {
        height: 100px;
        width: 155px;
        box-shadow: 0 3px 4px var(--color-light-gray);
    }
</style>