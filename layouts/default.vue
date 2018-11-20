<template>
  <div>
    <my-header></my-header>
    <nuxt keep-alive/>
  </div>
</template>

<script>
  import MyHeader from '@/components/public/header/index.vue';
  export default {
    components: {
      MyHeader
    }
  }
</script>

<style lang="stylus">

</style>
