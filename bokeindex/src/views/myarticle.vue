<template>
  <div class="article">
      <MyHead></MyHead>
        <div class="view">
          <div class="crumbs">
            <router-link to="/">首页</router-link> 
            <span> / </span>
            <span>文章</span>
          </div>
          <div class="content">
            <h3 class="title">{{mydata.title}}</h3>
            <h5 class="time">{{mydata.time}}</h5>
            <!-- <h5 class="author">作者：***</h5> -->
            <div class="con">
              {{mydata.content}}
            </div>
          </div>
        </div>
      <ChangeTheme></ChangeTheme>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
import ChangeTheme from "@/components/changetheme"

export default {
    components:{
        MyHead,MyFoot,ChangeTheme
    },
  name: 'myarticle',
  data () {
    return {
        mydata:''
    }
  },
  created(){
    var id=this.$route.query.id;
    this.$axios.get("/api/article/",{'id':id})
        .then(res=>{
          (res.data).forEach(element => {
              element.desc=element.content.slice(0,80)+'...';
              element.time=this.$store.state.formatDate(element.time);
          });
          this.mydata=res.data[0];
          console.log(this.mydata)
      })
  }
}
</script>

<style scoped lang="scss">
    .article{
      width: 100%;
      height: 100%;
      overflow:hidden;
    }
  .main{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .view{
    margin-top: 50px;
    margin-bottom: 50px;
    .myslide{
      margin-top: 50px;
      float: left;
    }
  }

  // 面包屑导航
  .crumbs{
    padding: 20px 0;
    a{
      color: #000;
    }
  }
  
  // 
  .content{
    text-align: center;
    color: #111;
    .title{
      font-size: 20px;
      font-weight: 700;
      margin: 20px 0 10px;
    }
    .time{
      font-size: 14px;
      margin: 0 auto 10px;
    }
    .con{
      text-align: left;
    }
  }
</style>
