<template>
  <div class="mymain">
      <MyHead></MyHead>
        <!-- 轮播图 -->
        <div class="main">
          <div class="view">
            <!-- 列表 -->
            <div class="new">
              <ul>
                <li class="animated zoomIn hvr-float-shadow" v-if="lists" v-for="(item,index) in nowlists" :key="index">
                  <a class="post-img loading" href="javascript:;" @click=jump(item)>
                    <img :src="item.thumb" :alt="item.thumb">
                  </a>
                  <h3 class="title">
                    <a href="javascript:;" @click=jump(item)>
                      {{item.title}}
                    </a>
                  </h3>
                  <p class="desc">{{item.desc}}</p>
                  <p>
                    <span class="time">
                      <i class="iconfont icon-shijian"></i> {{item.time}}
                    </span>
                    <span class="look">
                      <i class="iconfont icon-yanjing_xianshi"></i> {{item.look}}
                    </span>
                  </p>
                  <div class="close" @click="close(index)">
                    <i class="iconfont icon-shanchu"></i>
                  </div>
                </li>
              </ul>
              <p v-if="lists.length==0">暂无数据</p>
              <!-- page -->
              <Page :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent" ></Page>
            </div>
            <!--  -->
            <section class="myslide animated jello ">
              <!-- <MySidebar></MySidebar> -->
            </section>

            <!-- 提示 -->
            <p class="ts">{{ts}}</p>
            <!--  -->
            <Prompt title="" content="确定要删除吗？" @myclick='child'></Prompt>
          </div>
        </div>
      <!-- <MyMask></MyMask> -->
      <ChangeTheme></ChangeTheme>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import Prompt from "@/components/prompt"
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
import Fade from "@/components/other/fade"
import MyMask from "@/components/other/mask"
import ChangeTheme from "@/components/changetheme"
import Page from "@/components/mycomponents/page"
import MySidebar from "@/views/sidebar"

export default {
    components:{
        MyHead,MyFoot,Fade,ChangeTheme,MyMask,MySidebar,Page,Prompt
    },
  name: 'mymain',
  data () {
    return {
      ts:'',
      thisclose:'',
      page:{
            onedate:3,
            oldlistsnum:'',
        },
        nowlists:[],
        lists:[]
    }
  },
  created(){
      this.$axios.get("/api/",)
        .then(res=>{
          (res.data).forEach(element => {
              element.desc=element.content.slice(0,80)+'...';                                 //简介处理
              element.time=this.$store.state.formatDate(element.time);                        //时间处理
              element.thumb=element.thumb? element.thumb : require('../assets/img/1.jpg')     //导图处理
          });
          this.lists=res.data;
          this.page.oldlistsnum=this.lists.length;
          var a=this.$route.query.page==undefined? 1 : this.$route.query.page;
          if(a==1){
            this.nowlists=this.lists.slice(a*this.page.onedate-this.page.onedate,this.page.onedate);
          }else{
              this.nowlists=this.lists.slice(a*this.page.onedate-this.page.onedate,a*this.page.onedate);
          }
      }).catch(function(err){
          // console.log(err)
      });
  },
  
  methods:{
    child(res){ 
      if(res){
       document.querySelector('.mymain .prompt').style.cssText="display:none";
       console.log('你点击了确定！')
      }
    },
    close(e){
      this.thisclose=e;
      document.querySelector('.mymain .prompt').style.cssText="display:block";
    },
    jump(e){
      this.$router.push({path:`/article/${e.id}`})
    },
      ievent(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/',query:{page:data}})
      },
      pageprev(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/',query:{page:data}})
      }
  },
  mounted(){
        this.page.oldlistsnum=this.lists.length;
        var page=this.$route.query.page;
        if(page){
            page=this.$route.query.page;
        }else{
            page=1;
        }
  }
}
</script>

<style scoped lang="scss">
    .mymain{
      width: 1024px;
      overflow: auto;
    }
    .mymain .prompt{
      display: none;
    }
  .main{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .view{
    margin-top: 50px;
    margin-bottom: 50px;
    .myslide{
      margin-top: 50px;
      float: left;
    }
    .new{
      padding-top: 50px;
      width: 802px;
      float: left;
      ul{
        li.float-shadow{
          display: inline-block;
        }
        li.float-shadow:hover{
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
        }
        li{
          width: 760px;
          height: 150px;
          margin-bottom: 20px;
          padding: 20px;
          background-color: rgba(0,0,0,0.8);
          border: 1px solid #eee;
          border-radius: 2px;
          -webkit-transition: all .4s ease;
          transition: all .4s ease;
          position: relative;
          color: #eee;
          .post-img {
            min-height: 130px;
            float: left;
            margin-right: 2.82%;
            margin-left: 0;
            max-width: 330px;
            width: 30%;
            height: auto;
            position: relative;
            img{
              width: 100%;
            }
          }
            .close{
              position: absolute;
              bottom: 20px;
              right: 20px;
              cursor: pointer;
            }
          h3 {
              display: block;
              padding-bottom: 10px;
              font-size: 18px;
              font-weight: 700;
              line-height: 24px;
          }
          .desc{
            font-size: 14px;
            line-height: 24px;
            display: block;
          }
          .time,.look{
            font-size: 13px;
            color: #999;
            margin-right: 10px;
            display: inline-block
          }
          a {
            color: #eee;
              margin: 0;
              padding: 0;
              background: 0 0;
              vertical-align: baseline;
              text-decoration: none;
              font-size: 100%;
              -webkit-transition: all .3s ease;
              -o-transition: all .3s ease;
              transition: all .3s ease;
          }
        }
      }
    }
  }

    .ts{
        display: none;
        z-index:100; 
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        width: auto; 
        height: auto; 
        margin-left: -91.5px; 
        top: 311px; 
        left: 50%;
        padding: 10px 20px;
        background: rgba(255,0,0,0.8);
        color: #fff;
        border-radius: 5px;
    }
</style>
