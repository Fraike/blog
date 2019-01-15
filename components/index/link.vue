<template>
    <div class="link-container">
            <!-- <ul class="tabbed-section__selector">
                <li @click="chooseTab" class="tabbed-section__selector-tab-1 active">tab1</li>
                <li class="tabbed-section__selector-tab-2">tab2</li>
                <li class="tabbed-section__selector-tab-3">tab3</li>
            </ul> -->
            <div class="material-tabs">
                <ul class="tabbed-section__selector">
                    <li @click="chooseTab(index)" v-for="(item,index) in navList" :key="index"  :class="['tabbed-section__selector-tab-'+(index+1),item.className]"> 
                       <i class="iconfont">
                          {{item.icon}}
                        </i>
                        {{item.name}}
                        </li>
                    <span class="tabbed-section__highlighter"></span>
                </ul>
                <div class="tabbed-section-1" :class="[navList[0].className=='active'?'visible':'hidden']">
                  <ul class="itemWrapper">
                       <li class="itemLi" v-for="(item,index) in linkList.filter(tmp=>tmp.type=='qianduan')" :key="index">
                          <div class="logo">
                             <img :src="item.urlPath" alt="">
                          </div>
                          <div class="text">
                              <p class="title">{{item.title}}</p>
                              <span class="subTitle">{{item.desc}}</span>
                          </div>
                      </li>
                  </ul>
                </div>
                <div class="tabbed-section-2" :class="[navList[1].className=='active'?'visible':'hidden']">
                   <ul class="itemWrapper">
                         <li class="itemLi" v-for="(item,index) in linkList.filter(tmp=>tmp.type=='desgin')" :key="index">
                          <div class="logo">
                              <img :src="item.urlPath" alt="">
                          </div>
                          <div>
                              <p class="title">{{item.title}}</p>
                              <span class="subTitle">{{item.desc}}</span>
                          </div>
                      </li>
                  </ul>
                </div>
                <div class="tabbed-section-3" :class="[navList[2].className=='active'?'visible':'hidden']">
                   <ul class="itemWrapper">
                      <li class="itemLi">
                          <div class="logo">
                              <img src="https://juejin.im/favicon.ico" alt="">
                          </div>
                          <div>
                              <p class="title">标题</p>
                              <span class="subTitle">高质量的技术社区</span>
                          </div>
                      </li>
                      <li class="itemLi">
                          <div class="logo">
                              <img src="https://juejin.im/favicon.ico" alt="">
                          </div>
                          <div>
                              <p class="title">标题</p>
                              <span class="subTitle">高质量的技术社区</span>
                          </div>
                      </li>
                  </ul>
                </div>
            </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    data(){
        return {
            navList:[
                {
                    name: '前端',
                    className: 'active',
                    icon: '&#xe65e;'
                },
                {
                    name: '设计',
                    className: '',
                    icon: '&#xe65e;'
                },
                {
                    name: '后台',
                    className: '',
                    icon: '&#xe8a3;'
                }
            ]
        }

    },
    computed: {
        ...mapState({
        linkList: state => state.index.linkList
        })
    },
    mounted() {
        console.log(this.linkList)
    },
    methods: {
        chooseTab(v){
            this.navList.forEach((item,index)=>{
                item.className = ''
                if(index === v){
                    item.className = 'active'
                }
                console.log(item)
            })
            console.log(this.navList)
        }
    }
}
</script>

<style lang='stylus' scoped>

@font-face {
  font-family: 'iconfont';  /* project id 1004847 */
  src: url('//at.alicdn.com/t/font_1004847_6psybp1s49x.eot');
  src: url('//at.alicdn.com/t/font_1004847_6psybp1s49x.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1004847_6psybp1s49x.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1004847_6psybp1s49x.woff') format('woff'),
  url('//at.alicdn.com/t/font_1004847_6psybp1s49x.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1004847_6psybp1s49x.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

$main-size= 16px;
    .link-container{
        width: 100%;
        height: 16rem;
        margin-top: 3.5rem;
    }

.material-tabs {
  display: block;
  padding: $main-size;
  padding-top: 0;
  width: 100%;
  max-width: 80%; 
  position: relative;
  margin: 0 auto;
  background: #fff;
//   box-shadow: 0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)!important;
  border-radius: 2px;

  @media all and (max-width: 480px) {
    max-width: 100%;
  }
}
.visible {
  position: relative;
  opacity: 1;
  width: 100% ;
  height: auto;
  transition: opacity .35s ease;
  z-index: 3;
}
.hidden {
  position: absolute;
  opacity: 0;
  z-index: 0;
  transition: opacity 0s ease;
  img {
    display: none;
  }
}
[class*="tabbed-section-"] {
  color: #000;  
  margin-top:60px

  img {
    width: 100%;
    height: 100%;
  }
}
.tabbed-section__selector {
  position: relative;
  height: $main-size*2;
  top: $main-size*1.95;
  left: $main-size;
  padding: 0;
  margin: 0;
  width: 100%;

  [class*="-tab-"] {
    float: left;
    display: block;
    height: $main-size*2;
    line-height: $main-size*2;
    width: 100px;
    text-align: center;
    background: #fff;
    font-weight: bold;
    text-decoration: none;
    color: black;
    font-size: 14px;
    cursor: pointer


    &.active {
      color: #000;
    }
  }

  a:first-child {
    border-top-left-radius: 2px;
  }
  a:last-of-type {
    border-top-right-radius: 2px;
  }
}

.tabbed-section__highlighter {
  position: absolute;
  z-index: 10;
  bottom: 0;
  height: 2px;
  background: #000;
  max-width: 100px;
  width: 100%;
  transform: translateX(0);
  display: block;
  left: 0;
  transition: transform .23s ease ;
}

.tabbed-section__selector-tab-3.active ~ .tabbed-section__highlighter {
  transform: translateX(200px);
}
.tabbed-section__selector-tab-2.active ~ .tabbed-section__highlighter {
  transform: translateX(100px);
}
.tabbed-section__selector-tab-1.active ~ .tabbed-section__highlighter {
  transform: translateX(0);
}

.itemWrapper {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start
}
.itemLi {
    width: 20%;
    padding: .3rem .6rem .3rem .6rem;

    box-sizing: border-box;
    border: 1px solid #f3f3f3;
    box-shadow: inset 0 0 0 0 #fff;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all .35s ease;
    overflow: hidden;
    position: relative;
    margin-right: .5rem

    
}
// .itemLi:hover {
//     box-shadow: 0 6px 6px rgba(0,0,0,.23);
// }
.itemLi:after,
.itemLi:before {
  padding: 18px 0 11px;
  content: '';
  position: absolute;
  top: 0;
  left: calc(-100% - 42px);
  height: calc(100% - 26px);
  width: calc(100% + 28px);
  color: #fff;
  border-radius: 2px;
  transform: skew(-25deg);
}
.itemLi:after {
  background: #b6b6b6;
  transition: left 0.8s cubic-bezier(0.86, 0, 0.07, 1) 0.2s;
  z-index: -2;
  opacity: 0.8;
}

.itemLi:before {
  background: #c3dbe2;
  z-index: -1;
  transition: left 1s cubic-bezier(0.86, 0, 0.07, 1);
}

.itemLi:hover:after {
  left: calc(0% - 10px);
  transition: left 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

.itemLi:hover:before {
  left: calc(0% - 15px);
  transition: left 1s cubic-bezier(0.86, 0, 0.07, 1);
}


.logo {
    margin-right: 0.2rem;
    z-index: 10;
    width: 35px;
    height: 35px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    position: relative;
    vertical-align: middle;
}
.title {
    margin-bottom: .1rem
    font-weight: bold;
    z-index:10
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.subTitle {
    // font-size: .75rem;
    display: block;
    color: #6d7380;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.text {
    width: 75%
}
</style>