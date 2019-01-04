<template>
  <div>
    <my-header></my-header>
    <!-- <nuxt/> -->
    <nuxt keep-alive/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  import MyHeader from '@/components/public/header/index.vue';
  import Footer from '@/components/public/footer/footer.vue';
  export default {
    components: {
      MyHeader,
      Footer
    }
  }
</script>

<style lang="stylus">

</style>
