<template>
    <div class="article-container">
        <div class="article-header">
            <h2 class=''>all article</h2>
            <div>more</div>
        </div>
        <div class='article'>
            <div class='article-box'>
                <div class="img-wrapper">
                    <img src="@/assets/img/article/article2.jpg" alt="">
                </div>
                <h2>Get in infomation</h2>
                <p>
                    Smile. Swim. Dazzle: Water ballet in the hollywood hills.
                </p>
                <span>23/11/2017</span>
            </div>
            <div class='article-box'>
                 <div class="img-wrapper">
                    <img src="@/assets/img/article/article2.jpg" alt="">
                </div>
                <h2>Get in infomation</h2>
                <p>
                    Smile. Swim. Dazzle: Water ballet in the hollywood hills.
                </p>
                <span>23/11/2017</span>
            </div>
            <div class='article-box'>
                 <div class="img-wrapper">
                    <img src="@/assets/img/article/article2.jpg" alt="">
                </div>
                <h2>Get in infomation</h2>
                <p>
                    Smile. Swim. Dazzle: Water ballet in the hollywood hills.
                </p>
                <span>23/11/2017</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
    .article-container{
        width: 86%;
        height: 16rem;
        margin: 0 auto;
        margin-top: 3.5rem;
    }
    .article-header
        display flex
        justify-content space-between
        align-items flex-end
        h2  
            font-family:'GoodVibrationsROB';
            color #000
            font-size 1.5rem
        div
            font-size .5rem
            cursor pointer
    .article
        display flex
        justify-content space-between
        align-items center
        margin-top 1rem
        .article-box
            width 30%
            height 12rem
            cursor pointer
            .img-wrapper
                width 100%
                height 9.5rem
                overflow hidden
                position relative
                img
                    height 9.5rem
            h2
                color: hsl(0, 0%, 0%);
                font-size: .4rem;
                margin-top: .3rem;
                letter-spacing: 2px;
            p
                font-size: .3rem;
                width: 60%;
                letter-spacing: 2px;
                margin-top: .5rem;
            span
                display: inline-block;
                font-size: .3rem;
                margin-top: .5rem;
                color: #b5b5b5;


</style>