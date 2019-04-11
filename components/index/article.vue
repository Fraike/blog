<template>
  <div class="article-container">
    <div class="article-header">
      <h2 class>all article</h2>
      <div>more</div>
    </div>
    <div class="article ">
      <div class="article-box hvr-grow" v-for="(item,index) in articleList" :key="index">
        <nuxt-link to="/article">
          <div class="img-wrapper">
            <img :data-original="item.imgUrl" src="@/assets/img/load.gif" alt ref="articleBox">
            <!-- <img v-lazy="item.imgUrl" alt ref="articleBox"> -->
            <!-- <img :src="item.imgUrl" alt=""> -->

          </div>
          <div class="text-wrapper ">
             <h2>{{item.title}}</h2>
            <p>{{item.subtitle}}</p>
            <span>{{item.time}}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  data() {
    return {
      articleList: [
        {
          title: "Get in infomation",
          imgUrl: "http://cdn.mitty.work/article1.jpg",
          subtitle: "Smile. Swim. Dazzle: Water ballet in the hollywood hills.",
          time: "23/11/2017"
        },
        {
          title: "Get in infomation",
          imgUrl: "http://cdn.mitty.work/article2.jpg",
          subtitle: "Smile. Swim. Dazzle: Water ballet in the hollywood hills.",
          time: "23/11/2017"
        },
        {
          title: "Get in infomation",
          // imgUrl: require("@/assets/img/article/article3.jpg"),
          imgUrl: "http://cdn.mitty.work/article3.jpg",
          subtitle: "Smile. Swim. Dazzle: Water ballet in the hollywood hills.",
          time: "23/11/2017"
        }
      ],
      imgBox: []
    };
  },
  mounted() {
    this.imgBox = this.$refs.articleBox;
    this.setImgBox(this.imgBox)
  },
  methods: {
    ...mapActions({
      setImgBox: "index/setimgList"
    })
  }
};
</script>

<style lang='stylus' scoped>
.article-container
  width 86%
  height 16rem
  margin 0 auto
  margin-top 3.5rem
.article-header
  display flex
  justify-content space-between
  align-items flex-end
  h2
    font-family "GoodVibrationsROB", Times, serif
    color #000
    font-size 1.5rem
  div
    font-size 0.5rem
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
    .text-wrapper
      h2
        color hsl(0, 0%, 0%)
        font-size 0.4rem
        margin-top 0.3rem
        letter-spacing 2px
      p
        font-size 0.3rem
        width 60%
        letter-spacing 2px
        margin-top 0.5rem
      span
        display inline-block
        font-size 0.3rem
        margin-top 0.5rem
        color #b5b5b5


  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    // box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
        transform: scale3d(1.05,1.05,05);
}
</style>