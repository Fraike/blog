<template>
    <ul class="nav-container">
        <li v-for="(item,index) in navList" 
        :key="index"
        :class="$store.state.index.fullPage==index?'li-active':''" @click="pageInfo(index)"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            navList: [
                'Home',
                'Archive',
                'Share',
                'About me'
            ]
        }
    },
    methods: {
        pageInfo(index){
           this.$store.dispatch('index/setfullPage',index);
        }
    }
};
</script>



<style lang='stylus' scoped>
.nav-container {
    font-size: 0.3rem;
    display: flex;
    align-items center
}
.nav-container li {
    position: relative;
    margin-left: 0.5rem;
    transition: 0.2s all linear;
    cursor: pointer;
    margin-bottom: -.2rem;
    padding-bottom: .2rem;
}
.nav-container li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #000;
    transition: 0.2s all linear;
}


.nav-container li:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color: #000;
    z-index: -1;
}
.nav-container  .li-active::before{
    width: 100%;
    top: 0;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color: #000;
    z-index: -1;
}

.nav-container li:hover ~ li::before {
    left: 0;
}

.nav-container li:active {
    background: #000;
    color: #fff;
}



</style>
