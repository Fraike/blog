<template>
  <div class="share-container">
    <div class="swiper-container" v-swiper:mySwiper="swiperOption" ref="swiperBox" v-if="isShow">
      <div class="prev swiper-button-prev swiper-button-black"></div>
      <div class="share-box swiper-wrapper">
        <div class="share-item swiper-slide" v-for="(item,index) in shareList" :key="index">
          <h3>
            {{item.title}}
            <span>{{item.imgList.length}}(photos)</span>
          </h3>
          <div class="img-item" v-for="(imgItem,index) in item.imgList" :key="index">
            <img :data-src="imgItem.imgUrl" alt class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
            <!-- <img :data-original="item.imgUrl" src="@/assets/img/error.jpg" alt ref="articleBox"> -->
            <span>{{imgItem.time}}</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
      <div class="next swiper-button-next swiper-button-black"></div>
      <div class="more-share">more</div>
    </div>
    <div class="loading-container" v-else>
      <loading></loading>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from "~/components/public/loading/loading.vue";
export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 0,
        init: false,
        observer: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden" //按钮隐藏时的Class
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
          // bulletActiveClass: 'my-bullet-active',
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        },
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 3
        }
      },
      shareList: [
        {
          title: "云南之旅 2018",
          imgList: [
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            }
          ]
        },
        {
          title: "云南之旅 2018",
          imgList: [
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            }
          ]
        },
        {
          title: "云南之旅 2018",
          imgList: [
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            }
          ]
        },
        {
          title: "云南之旅 2018",
          imgList: [
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article4.jpg"),
              time: "25.02.2018"
            }
          ]
        }
      ],
      isShow: true
    };
  },
  components: {
    Loading
  },
  // mounted() {

  // },
  watch: {
    isShowShare: function(newisArticleShow, oldisArticleShow) {
      this.mySwiper.init();
    }
  },
  computed: {
    ...mapState({
      isShowShare: state => state.index.isShowShare
    })
  },
  methods: {
    ...mapActions({
      setImgBox: "index/setimgList"
    })
  }
};
</script>

<style lang='stylus' scoped>
.share-container >>> .swiper-pagination-bullet-active
  opacity 1
  background #000

.share-container >>> .swiper-container
  padding-bottom .4rem


.share-container
  width 86%
  height 15rem
  margin 0 auto
  margin-top 3.5rem
  position relative
  // overflow hidden
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
.prev
  width 5%
.next
  width 5%
.share-box
  display flex
  // overflow-x auto
  // align-items flex-start
  height 100%
  .share-item
    display inline-block
    width 45%
    margin-right 0.5rem
    // flex-shrink:0
    h3
      font-size 0.55rem
      margin-bottom 0.3rem
      span
        font-size 0.3rem
        color #b6b6b6
    .img-item
      display inline-block
      width 45%
      margin 0 0.2rem 0.3rem 0
      height: 4.4rem
      img
        max-width 100%
        max-height 100%
        border-radius 0.1rem
        margin-bottom 0.2rem
        cursor pointer
      span
        color #b6b6b6
.my-button-disabled
  opacity 0
.more-share
  display none
  position absolute
  top 50%
  right 0
.loading-container
  position absolute
  width 100%
  top 35%
  transform translateY(-50%)
</style>