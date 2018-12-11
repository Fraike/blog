<template>
  <div>
    <div :style="isFixed" ref="indexWrapper">
      <article
        v-show="isLoaded"
        id="fullpage"
        :style="{'transform': 'translate3d(0px,-'+ $store.state.index.fullPage*offsetheight  +'px, 0px)'}"
      >
        <!-- <section class="container section fadeInUp"> -->
        <section class="container section" ref="container">
          <lunbo></lunbo>
          <info></info>
        </section>
        <section class="section">
          <my-article></my-article>
        </section>
        <section class="section">
          <share></share>
        </section>
        <section class="section">
          <about-me></about-me>
        </section>
      </article>
      <div class="loading-container" v-show="!isLoaded">
        <loading></loading>
      </div>
    </div>
    <div>
      <nuxt-child keep-alive></nuxt-child>
    </div>
    <!-- <transition name="fade"> -->
    <!-- </transition> -->
  </div>
</template>

<script>
import Lunbo from "~/components/index/lunbo.vue";
import Info from "~/components/index/info.vue";
import MyArticle from "~/components/index/article.vue";
import Share from "~/components/index/share.vue";
import AboutMe from "~/components/index/aboutMe.vue";
import Loading from "~/components/public/loading/loading.vue";
import { mapActions, mapState, mapMutations } from "vuex";
import "animate.css";

export default {
  data() {
    return {
      fullPage: 0,
      // fullPageNum: this.$store.state.index.fullPageNum,
      offsetheight: "",
      isLoaded: false,
      isFixed: {
        height: "100%",
        overflow: "hidden"
      }
    };
  },
  components: {
    Lunbo,
    Info,
    MyArticle,
    Share,
    AboutMe,
    Loading
  },
  watch: {
    isArticleShow: function(newisArticleShow, oldisArticleShow) {
      // console.log("newisArticleShow");
      window.onmousewheel = document.onmousewheel = null;
      this.isFixed.height = this.offsetheight + "px";
      // console.log(this.$refs.indexWrapper);

      // this.$refs.indexWrapper.style.height =  this.offsetheight
      // document.removeEventListener("DOMMouseScroll", this.scroll);
    }
  },
  // computed:
  //   // console.log()
  //   // ...mapState({
  //   //   fullPageNum: 'index/fullPageNum'
  //   // })
  //   mapState({
  //     fullPageNum: state => state.index.fullPageNum
  //   }),
  computed: {
    ...mapState({
      fullPageNum: state => state.index.fullPageNum,
      isArticleShow: state => state.index.isArticleShow
    })
  },
  created() {
    if (typeof window !== "undefined") {
      // const WOW = require('wowjs')
      // new WOW.WOW().init()
    }
  },
  mounted() {
    let self = this;

    if (document.addEventListener) {
      this.offsetheight = document.documentElement.clientHeight;
      // document.addEventListener("DOMMouseScroll", this.scroll, false);
    }
    window.onmousewheel = document.onmousewheel = this.scroll;
    //  console.log(this.$refs.container.style.clientHeight);
    self.isLoaded = true;
    // this.lazyload();
    // document.removeEventListener("DOMMouseScroll",this.scroll)
  },
  methods: {
    scroll(e) {
      // console.log(e);
      // console.log(this.$refs)
      e = e || window.event;
      // return false;
      // console.log(this.setfullPageNum);
      // this.setfullPageNum(true)
      if (this.fullPageNum) {
        return false;
      }
      if (e.wheelDelta < 0) {
        if (this.$store.state.index.fullPage >= 3) {
          return false;
        }
        this.setfullPageNum(true);
        this.$store.dispatch(
          "index/setfullPage",
          this.$store.state.index.fullPage + 1
        );
        setTimeout(() => {
          this.setfullPageNum(false);
        }, 1000);
      } else {
        if (this.$store.state.index.fullPage <= 0) {
          return false;
        }
        this.setfullPageNum(true);
        this.$store.dispatch(
          "index/setfullPage",
          this.$store.state.index.fullPage - 1
        );
        setTimeout(() => {
          this.setfullPageNum(false);
        }, 1000);
      }
      this.lazyload();
    },
    lazyload() {
      // console.log("ss");
      let self = this;
      Array.prototype.forEach.call(self.$store.state.index.imgList, function(
        item,
        index
      ) {
        let rect;
        rect = item.getBoundingClientRect();
        console.log(self.offsetheight,rect)
        if (rect.bottom >= 0 && rect.top > self.offsetheight) {
         !function(){
           console.log('加载')
           var img = new Image()
           console.log(item.dataset);
           
           img.src = item.dataset.original
           img.onload = function(){
             item.src = img.src
           }
           item.removeAttribute("data-original")
         }()
        }
        // console.log(rect);
      });
    },
    ...mapActions({
      setfullPageNum: "index/setfullPageNum",
      setisArticleShow: "index/setisArticleShow"
    })
  },
  beforeRouteLeave(to, from, next) {
    // console.log("exit");
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  }
};
</script>

<style lang='stylus'>
#fullpage
  position relative
  transform translate3d(0px, 0px, 0px)
  transition all 1000ms ease
.container
  display flex
  justify-content space-between
  align-items center
  margin-top 2rem
.loading-container
  position absolute
  width 100%
  top 50%
  transform translateY(-50%)
body::-webkit-scrollbar
  display none
.fadeInUp
  animation fadeInUp 1s
@keyframes fadeInUp
  from
    opacity 0
    transform translate3d(0, 100%, 0)
  to
    opacity 1
    transform translate3d(0, 0, 0)
.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity 0
</style>
