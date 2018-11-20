<template>
    <div class="article-wrapper">
        <div class="article-container">
            article
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.onmousewheel = document.onmousewheel = null;
    },

}
</script>

<style lang='stylus' scoped>
.article-wrapper    
    position absolute
    top 0px
    left 0px
    right 0px
    bottom 0px
    background-color rgba(0,0,0,.5)
    z-index 999
    .article-container
        width 50%
        height 5rem
        margin 0 auto 
        background-color #fff


</style>