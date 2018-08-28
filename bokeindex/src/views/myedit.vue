<template>
  <div class="myedit">
      <MyHead></MyHead>
      <div class="view">
          <input type="text" class="titleinp" placeholder="填写标题" v-model="title">
        <quill-editor ref="myTextEditor"
              v-model="content"
              :config="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)">
        </quill-editor>
        <div>
            <button class="submit" @click="mysubmit">完成</button>
         <button class="" @click="show">show</button>
        </div>
      </div>
      <p class="ts">{{ts}}</p>
      <ChangeTheme></ChangeTheme>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
import ChangeTheme from "@/components/changetheme"

export default {
    components:{
        MyHead,MyFoot,ChangeTheme,quillEditor
    },
  name: 'myedit',
  data () {
    return {
        ts:'',
        title:'',
        content: '',
        editorOption: {
        // something config
        }
    }
  },
  methods: {
    onEditorBlur(editor) {
    //   console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
    //   console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
    //   console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    },
    show(){
        console.log(JSON.parse(localStorage.getItem('mycontent')).time)
    },
    getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours=date.getHours();
            var min=date.getMinutes();
            var sec=date.getSeconds();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            // 时
            if (hours >= 0 && hours <= 9) {
                hours = "0" + hours;
            }
            // 分
            if (min >= 0 && min <= 9) {
                min = "0" + min;
            }
            // 秒
            if (sec >= 0 && sec <= 9) {
                sec = "0" + sec;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + hours + seperator2 + min
                    + seperator2 + sec;
            return currentdate;
    },
    // 完成
    mysubmit(){
        let content=this.content;
        let pattimg=/<img\b.*?(?:\>|\/>)/gi;
        if(content.length==0){
            this.ts="编辑失败！试着输入一些文字吧"
            document.querySelector('.ts').style.cssText="display:block";
            setTimeout(function(){
                document.querySelector('.ts').style.cssText="display:none";
            },2000)
            return false;
        }else{
            if(localStorage.getItem('mycontent')){
                let befordata = JSON.parse(localStorage.getItem('mycontent'));
                let newdata = {id:befordata.length,time:this.getNowFormatDate(),con:this.content}
                befordata.push(newdata);
                localStorage.setItem('mycontent',JSON.stringify(befordata))
                this.ts="编辑完成！"
                this.title='',
                this.content='',
                document.querySelector('.ts').style.cssText="display:block";
                setTimeout(function(){
                    document.querySelector('.ts').style.cssText="display:none";
                },2000)
                this.$router.push('/')
            }else{
                let mydata=[{id:0,time:this.getNowFormatDate(),con:this.content}];
                localStorage.setItem('mycontent',JSON.stringify(mydata))
                document.querySelector('.ts').style.cssText="display:block";
                setTimeout(function(){
                    document.querySelector('.ts').style.cssText="display:none";
                },2000)
            }
        }
    }
  },
  // if you need to get the current editor object, you can find the editor object like this, the $ref object is a ref attribute corresponding to the dom redefined
  // 如果你需要得到当前的editor对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的editor对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor
    },
  },
  mounted() {
    // console.log('this is my editor', this.editor)
    // this.editor to do something...
  },
  created(){
      
  }
}
</script>

<style scoped lang="scss">
    .view{
        padding: 80px 0 80px;
    }
    input.titleinp{
        outline: none;
    }
    .titleinp{
        display: block;
        box-sizing: border-box;
        margin: 0 0 20px;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #333;
        text-indent: 2em;
    }
    .quill-editor{
        width: 100%;
        height: 350px;
        margin: 0 0 70px;
    }
    button{
        display: inline-block;
    }
    // 完成
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
