<template>
  <div class="myhead" :class="changeblack==true?'changeblack':'changewhite'">
      <div class="main">
        <div class="logo">我的博客-HelloWorld</div>
        <nav class="mynav">
            <a @click="jump(item)" class="hvr-icon-buzz-out" :class="{active:headactive==index}" href="javascript:void(0);" v-for="(item,index) in nav" :key="index">
                <i class="hvr-icon" :class="item.icon"></i>
                {{item.text}}
            </a>
        </nav>
      </div>
  </div>
</template>

<script>
export default {
  name: 'myhead',
  data () {
    return {
        active:0,
        nav:[
            {id:0,text:'首页',href:'/',icon:'iconfont icon-shouye'},
            // {id:1,text:'编辑',href:'/edit',icon:'iconfont icon-bianjibiaoge'},
            // {id:1,text:'归整',href:'/integration',icon:'iconfont icon-iconset0156'},
            // {id:2,text:'仓库',href:'/warehouse',icon:'iconfont icon-cangku_kucunxiangqing_o'},
            // {id:3,text:'采集',href:'/collection',icon:'iconfont icon-xinxicaiji'},
            // {id:4,text:'养蜂人',href:'/beekeepers',icon:'iconfont icon-qunzu_o'},
            // {id:5,text:'其他',href:'/other',icon:'iconfont icon-qunzu_o'},
        ]
    }
  },
  mounted(){

  },
  computed:{
      headactive(){
          return  this.$store.state.headactive;
      },
      changeblack(){
          return  this.$store.state.changeblack;
      }
  },
  methods:{
      jump(e){
          this.$router.push(e.href);
          this.$store.commit('newheadactive',e.id)
      },
  }
}
</script>

<style scoped lang="scss">

    .myhead{
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 5px 3px rgba(255,255,255,0.2);
        background: rgba(255,255,255,0.8);
        color: #111;
        transition: all 0.3s;
        .main{
            display: flex;
            justify-content: space-between;
            .logo{
                font-size: 18px;
            }
            .logo:hover{
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                -webkit-animation-name: jello;
                animation-name: jello;
                -webkit-transform-origin: center;
                transform-origin: center;
            }
            .mynav{
                width: 50%;
                display: flex;
                justify-content: space-between;
                a{
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    color: #555;
                    transition: all 0.3s;
                    i{
                        font-size: 20px;
                    }
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
        box-shadow: 0 5px 3px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.8);
        color: #eee;
        .main{
            .mynav{
                a{
                    color:#aaa;
                }
                a.active{
                    color: #eee;
                }
                a:hover{
                    color: #eee;
                }
            }
        }
    }

    .changewhite{
        box-shadow: 0 5px 3px rgba(0,0,0,0.2);
        background: rgba(255,255,255,0.8);
        color: #111;
        .main{
            .mynav{
                a{
                    color:#555;
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

    
</style>
