<template>
  <transition name="test">
    <div class="article-wrapper">
      <!-- <transition name="slide-fade"> -->
      <div class="article-container">
        <mavon-editor
          class="md"
          :value="context"
          :subfield="prop.subfield"
          :defaultOpen="prop.defaultOpen"
          :toolbarsFlag="prop.toolbarsFlag"
          :editable="prop.editable"
          :scrollStyle="prop.scrollStyle"
        ></mavon-editor>
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
import "mavon-editor/dist/css/index.css";
export default {
  // transition: 'test',
  data() {
    return {
      context: "", //输入的数据
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true // 导航目录
      }
    };
  },
  mounted() {
    console.log("加载文章页");
    this.setfullPageNum(true);
    this.setisArticleShow(true);
    this.context = this.result[0].content;
    if (document.addEventListener) {
      // document.addEventListener("DOMMouseScroll", this.scroll, true);
    }
    // window.onmousewheel = document.onmousewheel = this.scroll;
    // window.onmousewheel = document.onmousewheel = this.scroll
    console.log(window.onmousewheel, document.onmousewheel);
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
      console.log("back");
       this.setisArticleShow(false);
    },
    scroll(e) {
      e = e || window.event;
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
  position absolute
  top 0px
  left 0px
  right 0px
  bottom 0px
  background-color rgba(0, 0, 0, 0.5)
  overflow-y scroll
  z-index 999
  .article-container
    width 50%
    height 30rem
    // overflow-y scroll
    margin 0 auto
    margin-top 1rem
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
</style>