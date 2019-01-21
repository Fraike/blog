<template>
    <div class="music-container">
        <!-- <span class="hvr-underline-from-center">Search</span>
        
        <span class="hvr-underline-from-center">Log in</span> -->
        <div class="music-box"  v-if="loaded">
            <img :src="musicList[0].al.picUrl" alt="">
            <div class="audio-progress">
                <div class="audio-progress-bg"></div>
                <div class="audio-progress-cu"></div>
                <div class="audio-progress-point"></div>
            </div>
        </div>
        

    </div>
</template>

<script>
import axios from  'axios'
export default {
    data(){
        return {
            musicList : [],
            loaded: false
        }
    },
    mounted() {
        let self = this; 
        axios.get('/music/getMusic').then(res=>{
            console.log(res)
            if(res.status === 200 && res.data.code === 0) {
                this.musicList = res.data.musicList
                self.loaded = true
            }
        })
    }

};
</script>

<style lang='stylus' scoped>
.music-container
    width 20%
    display: flex;
    .music-box
        display flex
        justify-content space-around
        align-items center
        img 
            width 20%
        .audio-progress
            width 55%
            position relative
            .audio-progress-bg
                position absolute
                top 0
                width 100%
                height .08rem
                border-radius 3px
                background-color #f60
            .audio-progress-cu
                position absolute
                top 0
                width 60%
                height .08rem
                border-radius 3px
                background-color #000
            .audio-progress-point
                position absolute
                top 0
                width .2rem
                height .2rem
                height .08rem
                border-radius 50%
                background-color #fff


    // >span
    //     margin-right 0.5rem
    //     cursor pointer
    //     margin-bottom: -.2rem;
    //     padding-bottom: .2rem;

.hvr-underline-from-center
    display inline-block
    vertical-align middle
    -webkit-transform perspective(1px) translateZ(0)
    transform perspective(1px) translateZ(0)
    box-shadow 0 0 1px rgba(0, 0, 0, 0)
    position relative
    overflow hidden
.hvr-underline-from-center:before
    content ''
    position absolute
    z-index -1
    left 51%
    right 51%
    bottom 0
    background #000
    height 2px
    -webkit-transition-property left, right
    transition-property left, right
    -webkit-transition-duration 0.3s
    transition-duration 0.3s
    -webkit-transition-timing-function ease-out
    transition-timing-function ease-out
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before
    left 0
    right 0
</style>