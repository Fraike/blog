<template>
  <div class="loading">
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "正在载入..."
    }
  }
};
</script>
<style scoped lang="stylus">

.loading{
            width: 150px;
            height: 15px;
            margin: 0 auto;
            margin-top:100px;
            text-align: center;
        }
        .loading span{
            display: inline-block;
            width: 15px;
            height: 100%;
            margin-right: 5px;
            background: #c1dce2;
            -webkit-animation: load 1.04s ease infinite;
        }
        .loading span:last-child{
            margin-right: 0px; 
        }
        @-webkit-keyframes load{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        .loading span:nth-child(1){
            -webkit-animation-delay:0.13s;
        }
        .loading span:nth-child(2){
            -webkit-animation-delay:0.26s;
        }
        .loading span:nth-child(3){
            -webkit-animation-delay:0.39s;
        }
        .loading span:nth-child(4){
            -webkit-animation-delay:0.52s;
        }
        .loading span:nth-child(5){
            -webkit-animation-delay:0.65s;
        }
</style>
