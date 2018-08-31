<template>
  <div class="view">
      <div class="changetheme hvr-icon-buzz-out " @click="changetheme" :class="changeblack==true?'changeblack':'changewhite'">
          <i class="hvr-icon iconfont icon-zhuti_o"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'changetheme',
  data () {
    return {
        myswitch:false,
    }
  },
  methods:{
      changetheme(){
          this.$nextTick(function(){
              this.$store.commit('newchangeblack',!this.$store.state.changeblack)
          })
      }
  },
  mounted(){

  },
  computed:{
      changeblack(){
          return  this.$store.state.changeblack;
      }
  },
}
</script>

<style scoped lang="scss">
    .changetheme{
        cursor: pointer;
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 60px;
        height: 60px;
        overflow: hidden;
        text-align: center;
        line-height: 60px;
        border-radius: 50%;
        color: #eee;
        background: rgba(0,0,0,0.8);
        transition: all 0.3s;
        i{
            font-size: 24px;
            font-weight: bold;
        }
    }


    .headblack{
        box-shadow: 0 5px 3px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.8);
        color: #eee;
    }
    .headwhite{
        box-shadow: 0 5px 3px rgba(255,255,255,0.2);
        background: rgba(255,255,255,0.8);
        color: #111;
        .main{
            .mynav{
                a{
                    color: #555;
                }
                a.active{
                    color: #111;
                }
                a:hover{
                    color: #111;
                }
            }
        }
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
