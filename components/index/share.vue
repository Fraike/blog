<template>
    <div class="share-container swiper-container" v-swiper:mySwiper="swiperOption">
        <div class="prev swiper-button-prev">prev</div>
        <div class="share-box swiper-wrapper">
            <div class="share-item swiper-slide" v-for="(item,index) in shareList" :key="index">
                <h3>{{item.title}} <span>{{item.imgList.length}}(photos)</span></h3>
                <div class="img-item" v-for="(imgItem,index) in item.imgList" :key="index">
                     <img :src="imgItem.imgUrl" alt="">
                     <span>{{imgItem.time}}</span>
                </div>
            </div>      
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
        <div class="next swiper-button-next">next</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 1,
        init: true,
        observer:true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
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
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            }
          ]
        },
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
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            }
          ]
        },
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
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            }
          ]
        },
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
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            },
            {
              imgUrl: require("~/assets/img/article/article3.jpg"),
              time: "25.02.2018"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log("app init", this);
    console.log()
    setTimeout(()=> {
        // this.mySwiper.init()
    },20)
    // setTimeout(() => {
    //   var mySwiper = new Swiper(".swiper-container", {
    //     direction: "horizontal", // 垂直切换选项
    //     // loop: true, // 循环模式选项

    //     // 如果需要分页器
    //     // pagination: {
    //     // el: '.swiper-pagination',
    //     // },

    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev"
    //     },

    //     // 如果需要滚动条
    //     // scrollbar: {
    //     //   el: ".swiper-scrollbar"
    //     // }
    //   });
    // }, 20);
  }
};
</script>

<style lang='stylus' scoped>
.share-container
    width 86%
    height 15rem
    margin 0 auto
    margin-top 3.5rem
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
            img
                width 100%
                border-radius 0.1rem
                margin-bottom 0.2rem
                cursor pointer
            span
                color #b6b6b6
</style>