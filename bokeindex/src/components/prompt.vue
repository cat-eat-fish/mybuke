<template>
  <div class="prompt">
        <div class="prompt_body" type="dialog">
            <div class="layui-layer layui-layer-dialog  layer-anim" id="layui-layer1" type="dialog" times="1" showtime="0" contype="string" style="">
                <div class="layui-layer-title" style="cursor: move;">{{title}}</div>
                <div id="" class="layui-layer-content">{{content}}</div>
                <span class="layui-layer-setwin"> 
                    <a class="layui-layer-ico layui-layer-close layui-layer-close1" @click="close" href="javascript:;">×</a>
                </span>
                <div class="layui-layer-btn layui-layer-btn-">
                    <a @click="ok" class="layui-layer-btn0" >确定</a>
                    <a @click="close" class="layui-layer-btn1">取消</a>
                </div>
                <span class="layui-layer-resize"></span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'myprompt',
  props:{
      title:{
          type:String,
          default:'标题'
      },
      content:{
          type:String,
          default:'内容'
      },
      istrue:{
          type:String,
          default:''
      }
  },
  data () {
    return {
        
    }
  },
  methods:{
      close(){
          document.querySelector('.prompt').style.cssText="display:none";
      },
      ok(){
          this.$emit('myclick', true)
      }
  }
}
</script>

<style scoped lang="scss">
    .prompt{
        display: block;
        z-index:100; 
        background-color:rgba(0,0,0,0.3); 
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter:alpha(opacity=30);
        .prompt_body{
            position: fixed;
            z-index: 100; 
            width: auto; 
            height: auto; 
            margin-left: -128px; 
            top: 311px; 
            left: 50%;
        }
        .layer-anim{
            min-width: 260px;
            z-index: 10; 
            animation: bounceIn 0.3s;
            margin: 0;
            position: fixed;
            padding: 0;
            background-color: #fff;
            // -webkit-background-clip: content;
            box-shadow: 1px 1px 50px rgba(0,0,0,.3);
        }
        .layui-layer-title {
            padding: 0 80px 0 20px;
            height: 42px;
            line-height: 42px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            color: #333;
            overflow: hidden;
            background-color: #F8F8F8;
            border-radius: 2px 2px 0 0;
        }
        .layui-layer-content {
            position: relative;
            padding: 20px;
            line-height: 24px;
            word-break: break-all;
            overflow: hidden;
            font-size: 14px;
            overflow-x: hidden;
            overflow-y: auto;
        }
        .layui-layer-setwin {
            position: absolute;
            right: 15px;
            top: 15px;
            font-size: 0;
            line-height: initial;
            .layui-layer-close1 {
                display: inline-block;
                position: relative;
                width: 16px;
                height: 16px;
                margin-left: 10px;
                top: -12px;
                font-size: 24px;
                background-position: 0 -40px;
                cursor: pointer;
            }
        }
        .layui-layer-btn {
            text-align: right;
            padding: 0 10px 12px;
            pointer-events: auto;
            user-select: none;
            -webkit-user-select: none;
            a {
                display: inline-block;
                height: 28px;
                line-height: 28px;
                margin: 0 6px;
                padding: 0 15px;
                border: 1px solid #dedede;
                background-color: #f1f1f1;
                color: #333;
                border-radius: 2px;
                font-weight: 400;
                cursor: pointer;
                text-decoration: none;
            }
            .layui-layer-btn0 {
                border-color: #4898d5;
                background-color: #2e8ded;
                color: #fff;
            }
        }
    }




@keyframes bounceIn {
    0% {
        opacity: 0;
        -webkit-transform: scale(.5);
        -ms-transform: scale(.5);
        transform: scale(.5);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
}
    
</style>
