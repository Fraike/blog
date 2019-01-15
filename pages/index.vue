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
          <LinkCom></LinkCom>
        </section>
        <Footer></Footer>
      </article>
      <div class="loading-container" v-show="!isLoaded">
        <loading></loading>
      </div>
    </div>
    <div>
      <nuxt-child/>
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
import LinkCom from "~/components/index/link.vue";
import Footer from "@/components/public/footer/footer.vue";
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
    LinkCom,
    Loading,
    Footer
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
  computed: {
    ...mapState({
      fullPageNum: state => state.index.fullPageNum,
      isArticleShow: state => state.index.isArticleShow
    })
  },
  // mounted() {
  //   let self = this;

  //   if (document.addEventListener) {
  //     this.offsetheight = document.documentElement.clientHeight;
  //     // document.addEventListener("DOMMouseScroll", this.scroll, false);
  //   }
  //   window.onmousewheel = document.onmousewheel = this.scroll;
  //   self.isLoaded = true;
  //   this.lazyload();
  // },
  activated() {
    let self = this;
    // console.log('results' + this.result)
    if (document.addEventListener) {
      this.offsetheight = document.documentElement.clientHeight;
      // document.addEventListener("DOMMouseScroll", this.scroll, false);
    }
    window.onmousewheel = document.onmousewheel = this.scroll;
    self.isLoaded = true;
    this.lazyload();
  },
  methods: {
    scroll(e) {
      e = e || window.event;
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
      // console.log(this.$store.state.index.fullPage)
      if (this.$store.state.index.fullPage === 2) {
        this.setshowShare(true);
      }
      this.lazyload();
    },
    lazyload() {
      let self = this;
      Array.prototype.forEach.call(self.$store.state.index.imgList, function(
        item,
        index
      ) {
        let rect;
        rect = item.getBoundingClientRect();
        if (
          (rect.top > self.offsetheight && item.dataset.original) ||
          (self.isArticleShow && rect.top === 0)
        ) {
          !(function() {
            var img = new Image();
            img.src = item.dataset.original;
            img.onload = function() {
              item.src = img.src;
            };
            item.removeAttribute("data-original");
          })();
        }
      });
    },
    ...mapActions({
      setfullPageNum: "index/setfullPageNum",
      setisArticleShow: "index/setisArticleShow",
      setshowShare: "index/setshowShare"
    }),
    // async asyncData(ctx) {
    //   let {
    //     status,
    //     data: { code, result }
    //   } = await ctx.$axios.get("/link/getLinks");
    //   // console.log(result);
    //   if (status === 200 && code === 0) {
    //     return {
    //       result
    //     };
    //   }
    // }
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
