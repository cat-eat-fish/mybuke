<template>
  <div class="no404">
      <MyHead></MyHead>
        <div class="error-code">4<span>0</span>4</div>
      <div class="error-desc">啊哦~ 你所访问的页面不存在</div>
      <div class="error-handle">
        <router-link to="/">返回首页</router-link>
        <a href="javascript:;" class="error-btn" @click="goBack">返回上一页</a>
      </div>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
export default {
    components:{
        MyHead,MyFoot
    },
  name: 'no404',
  data () {
    return {

    }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped lang="scss">
    .no404{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: #f3f3f3;
        box-sizing: border-box;
        
        padding-top: 50px;
    }
    .error-code{
        line-height: 1;
        font-size: 250px;
        font-weight: bolder;
        color: #2d8cf0;
    }
    .error-code span{
        color: #00a854;
    }
    .error-desc{
        font-size: 30px;
        color: #777;
    }
    .error-handle{
        margin-top: 30px;
        padding-bottom: 200px;
    }
    .error-btn{
        margin-left: 100px;
    }
    
</style>
