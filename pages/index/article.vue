<template>
  <div class="article-wrapper" @click.stop ="stop()">
    <div class="article-container" :class="isShow?'fadeInUp':'fadeOutDown'">
      <mavon-editor
        class="md"
        :value="context"
        :subfield="prop.subfield"
        :defaultOpen="prop.defaultOpen"
        :toolbarsFlag="prop.toolbarsFlag"
        :editable="prop.editable"
        :scrollStyle="prop.scrollStyle"
        :ishljs="prop.ishljs"
      ></mavon-editor>
    </div>
    <nuxt-link to="/">
    <div @click="back" class="back">返回</div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import "mavon-editor/dist/css/index.css";
export default {
  // transition: 'test',
  data() {
    return {
      context: "", //输入的数据
      isShow: true
    };
  },
  mounted() {
    this.setfullPageNum(true);
    this.setisArticleShow(true);
    this.context = this.result[0].content;
     window.onmousewheel = document.onmousewheel = this.scroll;
    //  document.addEventListener("DOMMouseScroll", this.scroll, false);
  },
  computed: {
    prop() {
      return {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
        boxShadow: false,
        ishljs: true
      };
    }
  },
  methods: {
    ...mapActions({
      setfullPageNum: "index/setfullPageNum",
      setisArticleShow: "index/setisArticleShow"
    }),
    back() {
      this.setisArticleShow(false);
      this.isShow = false;
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 250);
    },
    scroll(e) {
      e = e || window.event;
      console.log(e)
      // e.stopPropagation();
    },
    stop(e){
      console.log(e)
      return false;
    // e.stopPropagation()
    }
  },
  destroyed() {
    this.setfullPageNum(false);
  },
  async asyncData(ctx) {
    let {
      status,
      data: { code, result }
    } = await ctx.$axios.get("/article/getArticle");
    // console.log(result)
    if (status === 200 && code === 0) {
      return {
        result
      };
    }
  }
};
</script>

<style lang='stylus' scoped>
.article-wrapper
  position fixed
  width 100%
  height 100%
  top 0px
  left 0px
  right 0px
  bottom 0px
  background-color rgba(0, 0, 0, 0.5)
  overflow-y scroll
  z-index 999
  .article-container
    width 50%
    // height 30rem
    // overflow-y scroll
    margin 0 auto
    margin-top 1rem
    margin-bottom .5rem
    overflow hidden
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
.slide-fade-enter, .slide-fade-leave-to, transform translateX(10px)
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
.md
  // margin-top .5rem
.fadeInUp
  animation fadeInUp 0.3s
@keyframes fadeInUp
  from
    // opacity 0
    transform translate3d(0, 100%, 0)
  to
    // opacity 1
    transform translate3d(0, 0, 0)
.fadeOutDown
  animation fadeOutDown 0.3s
@keyframes fadeOutDown
  from
    opacity 1
    transform translate3d(0, 0, 0)
  to
    opacity 0
    transform translate3d(0, 100%, 0)
</style>