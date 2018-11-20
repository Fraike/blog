<template>
 <div class="lunbo-container">
    <img :src="imgUrl" alt="">
 </div>
</template>

<script>
export default {
    data () {
        return {
            imgUrl: require("~/assets/img/banner.jpg")
        }
    }
}
</script>

<style lang='stylus' scoped>
    .lunbo-container
        width 49.8%
        height 0
        padding-bottom 41%
        overflow hidden
        img
            width 100%
            height auto
</style>