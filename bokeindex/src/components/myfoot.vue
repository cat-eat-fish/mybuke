<template>
  <div class="myfoot" :class="changeblack==true?'changeblack':'changewhite'">
    <div class="main">
      版权内容
    </div>
  </div>
</template>

<script>
export default {
  name: 'myfoot',
  data () {
    return {

    }
  },
  computed:{
      changeblack(){
          return  this.$store.state.changeblack;
      }
  },
}
</script>

<style scoped>
  .myfoot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgba(255,255,255,0.8);
    color: #111;
    transition: all 0.3s;
  }
  .changeblack{
    background: rgba(0,0,0,0.8);
    color: #eee;
  }
  .changewhite{
    background: rgba(255,255,255,0.8);
    color: #111;
  }
</style>
