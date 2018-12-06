<template>
  <transition name="test">
    <div class="article-wrapper">
      <!-- <transition name="slide-fade"> -->
      <div class="article-container">
        article
        {{$store.state.index.fullPageNum}}
      </div>
      <nuxt-link to="/">
        <div @click="back" class="back">返回</div>
      </nuxt-link>
      <!-- </transition> -->
    </div>
  </transition>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  // transition: 'test',
  mounted() {
    console.log("加载文章页");

    this.setfullPageNum(true);
    // this.$store.dispatch(
    //   "index/setfullPage",
    //   1
    // );
    // this.$store.state.index.fullPageNum = true;
    // console.log( this.$store.state.index.fullPageNum );
    // this.$store.dispatch(
    //   "index/setfullPage",
    //   this.$store.state.index.fullPage + 1
    // );
    // window.onmousewheel = document.onmousewheel = null;
  },
  methods: {
    ...mapActions({
      setfullPageNum: "index/setfullPageNum"
    }),
    back() {
      console.log("back");
    }
  },
  destroyed() {
    this.setfullPageNum(false);
  }
};
</script>

<style lang='stylus' scoped>
.article-wrapper
  position absolute
  top 0px
  left 0px
  right 0px
  bottom 0px
  background-color rgba(0, 0, 0, 0.5)
  z-index 999
  .article-container
    width 50%
    height 30rem
    overflow-y scroll
    margin 0 auto
    margin-top 1rem
    border-radius 0.5rem
    background-color #fff
.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
.fade-enter, .fade-leave-active
  opacity 0
.slide-fade-enter-active
  transition all 0.3s ease
.slide-fade-leave-active
  transition all 0.8s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter, .slide-fade-leave-to,
  transform translateX(10px)
  opacity 0
.back
  position absolute
  top 1rem
  right 1rem
  width 0.5rem
  height 0.5rem
  border-radius 50%
  background #000
  cursor pointer
</style>