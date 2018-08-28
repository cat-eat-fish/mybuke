<template>
  <div class="fade">
      <ul>
          <li :style="{backgroundImage:'url(' + imgs[fadeactive2].src + ')'}" >

          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'fade',
  data () {
    return {
        fadeactive2:0,
        imgs:[
            {id:0,src:require('../../assets/img/fade1.jpg'),text:'01',href:''},
            {id:1,src:require('../../assets/img/fade2.jpg'),text:'02',href:''},
            {id:2,src:require('../../assets/img/fade3.jpg'),text:'03',href:''},
            {id:3,src:require('../../assets/img/fade4.jpg'),text:'04',href:''},
            {id:4,src:require('../../assets/img/fade5.jpg'),text:'05',href:''},
        ]
    }
  },
  mounted(){
      var that=this;
      setInterval(function(){
          if(that.fadeactive2==that.imgs.length-1){
              that.fadeactive2=-1;
          }
        that.fadeactive2++;
      },10000)
  },
  computed:{

    }
}
</script>

<style scoped lang="scss">
    .fade{
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.3;
        ul{
            min-height: 400px;
            height: 100%;
            position: relative;
            li{
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 0.3s;
            }
        }
    }
</style>
