<template>
<div>
  <article v-show="isLoaded" id="fullpage" :style="{'transform': 'translate3d(0px,-'+ $store.state.index.fullPage*offsetheight  +'px, 0px)'}">
    <!-- <section class="container section fadeInUp"> -->
    <section class="container section" ref="container">
      <lunbo></lunbo>
      <info></info>
    </section>
    <section class="section">
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
  <div class="loading-container" v-show="!isLoaded">
    <loading></loading>
  </div>
  <nuxt-child/>
</div>
</template>

<script>
import Lunbo from "~/components/index/lunbo.vue";
import Info from "~/components/index/info.vue";
import MyArticle from "~/components/index/article.vue";
import Share from "~/components/index/share.vue";
import AboutMe from "~/components/index/aboutMe.vue";
import Loading from "~/components/public/loading/loading.vue";
import { mapActions } from "vuex";
import 'animate.css'

export default {
  data() {
    return {
      fullPage: 0,
      fullPageNum: false,
      offsetheight: "",
      isLoaded:false
    };
  },
  components: {
    Lunbo,
    Info,
    MyArticle,
    Share,
    AboutMe,
    Loading,
    
  },
  created() {
    if (typeof window !== 'undefined') {
    // const WOW = require('wowjs')
    // new WOW.WOW().init()
    }
  },
  mounted() {
    let self = this;

    if (document.addEventListener) {
      this.offsetheight = document.documentElement.clientHeight;
      console.log(this.offsetheight)
     
      
      document.addEventListener("DOMMouseScroll", this.scroll, false);
    }
    document.onmousewheel = this.scroll;
     console.log(this.$refs.container.style.clientHeight);
     self.isLoaded = true
    // document.removeEventListener("DOMMouseScroll",this.scroll)
    
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
        this.fullPageNum = true;
        this.$store.dispatch(
          "index/setfullPage",
          this.$store.state.index.fullPage + 1
        );
        setTimeout(() => {
          this.fullPageNum = false;
        }, 1000);
      } else {
        if (this.$store.state.index.fullPage <= 0) {
          return false;
        }
        this.fullPageNum = true;
        this.$store.dispatch(
          "index/setfullPage",
          this.$store.state.index.fullPage - 1
        );
        setTimeout(() => {
          this.fullPageNum = false;
        }, 1000);
      }
    }
  }
};
</script>

<style lang='stylus'>
#fullpage {
  position: relative;
  transform: translate3d(0px, 0px, 0px);
  transition: all 1000ms ease;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.loading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

body::-webkit-scrollbar {
  display: none;
}
.fadeInUp {
  animation fadeInUp 1s 
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}


</style>
