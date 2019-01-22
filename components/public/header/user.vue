<template>
  <div class="music-container">
    <!-- <span class="hvr-underline-from-center">Search</span>
        
    <span class="hvr-underline-from-center">Log in</span>-->
    <div class="music-box" v-if="loaded">
      <img :src="musicList[0].al.picUrl" alt>
      <div class="text-wrapper">
        <div class="info-wrapper">
          <div class="music-info">{{musicList[0].name}}</div>
          <i @click="play" class="play-btn iconfont" v-html="platBtn"></i>
        </div>
        <div class="audio-progress">
          <div class="audio-progress-bg"></div>
          <div class="audio-progress-cu" :style="{width: sliderTime + '%'}"></div>
          <div class="audio-progress-point" :style="{left:sliderTime+'%'}"></div>
        </div>
        <div class="time">
          <span>{{ currentTime  | formatSecond}}</span>
          <span>{{ maxTime  | formatSecond}}</span>
        </div>
      </div>
    </div>
    <!-- <audio 
           
            src="http://m7c.music.126.net/20190122175135/f62a89b7e348e7ebce73142136e8d07f/ymusic/d9bc/807f/cb18/9e94faa1fb076ca89891fe720c272de6.mp3"
        >
    </audio>-->
    <audio
      :src="musicUrl"
      preload="metadata"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetaData"
      ref="audio"
    >Your browser does not support the
      <code>audio</code> element.
    </audio>
  </div>
</template>

<script>


import axios from "axios";


function realFormatSecond(second) {
  var secondType = typeof second

  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)

    var hours = Math.floor(second / 3600)
    second = second - hours * 3600
    var mimute = Math.floor(second / 60)
    second = second - mimute * 60

    return  ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
  } else {
    return '00:00'
  }
}
export default {
  data() {
    return {
      platBtn: "&#xe66c;",
      pauseBtn: "&#xe644;",
      playing: false,
      musicList: [],
      loaded: false,
      musicUrl: "",
      currentTime: 0,
      maxTime: 0,
      sliderTime: 0
    };
  },
  async mounted() {
    let self = this;
    await axios.get("/music/getMusic").then(res => {
      if (res.status === 200 && res.data.code === 0) {
        this.musicList = res.data.musicList;
      }
    });
    await axios
      .get("/music/getMusicUrl?id=" + self.musicList[0].id + "")
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          self.musicUrl = res.data.result.data[0].url;
          self.loaded = true;
        }
      });
  },
  methods: {
    play() {
      if (!this.playing) {
        this.playing = !this.playing;
        this.$refs.audio.play();
        this.platBtn = "&#xe644;";
      } else {
        this.playing = !this.playing;
        this.$refs.audio.pause();
        this.platBtn = "&#xe66c;";
      }
    },
    onTimeUpdate(res) {
        this.currentTime = res.target.currentTime
        this.sliderTime = parseInt(this.currentTime / this.maxTime * 100)

    },
    onLoadedMetaData(res) {
        this.maxTime = parseInt(res.target.duration)
        console.log(this.maxTime)
    }
  },
    filters: {
    // 将整数转化成时分秒
    formatSecond(second = 0) {
      return realFormatSecond(second)
    }
  }
};
</script>

<style lang='stylus' scoped>
.music-container
  width 20%
  display flex
  .music-box
    display flex
    justify-content space-around
    align-items center
    img
      width 20%
    .text-wrapper
      width 55%
      height 60%
      display flex
      flex-direction column
      justify-content space-around
      .info-wrapper
        display flex
        justify-content space-between
      .audio-progress
        width 100%
        position relative
        height 0.2rem
        .audio-progress-bg
          position absolute
          top 0
          width 100%
          height 0.08rem
          border-radius 3px
          background-color #f60
        .audio-progress-cu
          position absolute
          top 0
          height 0.08rem
          border-radius 3px
          background-color #000
        .audio-progress-point
          position absolute
          top -0.06rem
          width 0.2rem
          height 0.2rem
          border-radius 50%
          background-color red
          transition all .1s ease-in
      .time
        display flex
        justify-content space-between
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