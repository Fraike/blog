<template>
  <article id="fullpage" :style="{'transform': 'translate3d(0px,-'+ $store.state.index.fullPage*offsetheight  +'px, 0px)'}">
    <section class="container section " >
      <lunbo></lunbo>
      <info></info>
    </section>
    <section class="section">
       {{$store.state.index.fullPage}}
      <my-article>
       
      </my-article>
    </section>
    <section class="section ">
      <share></share>
    </section>
    <section class="section ">
      <about-me></about-me>
    </section>
  </article>
</template>

<script>
import Lunbo from "~/components/index/lunbo.vue";
import Info from "~/components/index/info.vue";
import MyArticle from "~/components/index/article.vue";
import Share from "~/components/index/share.vue";
import AboutMe from "~/components/index/aboutMe.vue";
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      fullPage: 0,
      fullPageNum: false,
      offsetheight: ""
    };
  },
  components: {
    Lunbo,
    Info,
    MyArticle,
    Share,
    AboutMe
  },
  mounted() {
    if (document.addEventListener) {
      this.offsetheight = document.documentElement.clientHeight;
      console.log(document.documentElement.clientHeight);
      document.addEventListener("DOMMouseScroll", this.scroll, false);
    }
    window.onmousewheel = document.onmousewheel = this.scroll;
  },
  methods: {
    setPage(index){

    },
    scroll(e) {
      e = e || window.event;
      if (this.fullPageNum) {
        return false;
      }
      if (e.wheelDelta < 0) {
        if (this.$store.state.index.fullPage >= 3) {
          return false;
        }
        this.fullPageNum = true;
        this.$store.dispatch('index/setfullPage',this.$store.state.index.fullPage + 1)
        // this.pageInfo(this.fullPage + 1);
        setTimeout(() => {
          this.fullPageNum = false;
        }, 1000);
      } else {
        if (this.$store.state.index.fullPage <= 0) {
          return false;
        }
        this.fullPageNum = true;
        console.log('sf')
        this.$store.dispatch('index/setfullPage',this.$store.state.index.fullPage - 1)
        setTimeout(() => {
          this.fullPageNum = false;
        }, 1000);
      }
    },
    
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


::-webkit-scrollbar {
    display: none;
}
</style>
