<template>
    <div class="header-container">
        <logo></logo>
        <my-nav></my-nav>
        <user></user>
    </div>
</template>

<script>
import Logo from './logo'
import MyNav from './nav'
import User from './user'
export default {
    components: {
        Logo,
        MyNav,
        User
    }
}
</script>

<style lang='stylus'>
    .header-container
        width 100%
        display flex
        justify-content space-between
        align-content center
        height 2rem
        position fixed 
        top 0px
        background #ffffff
        z-index 23
            
</style>