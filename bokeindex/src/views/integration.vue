<template>
  <div class="integration">
      <MyHead></MyHead>
      <div class="view">

        <label>
                <span>本地实现</span>
                <select name="Province" v-model="ProvinceVal"> 
                  <option value="0">请选择省</option>
                  <option :value="item" v-for="(item,index) in province" :key="index">{{item}}</option>
                </select>
                <select name="City" v-model="CityVal">
                  <option value="0">请选择市/直辖市</option>
                  <option :value="item" v-for="(item,index) in city" :key="index">{{item}}</option>
                </select>
                <select name="County" v-model="CountyVal">
                  <option value="0">请选择县/区</option>
                  <option :value="item" v-for="(item,index) in county" :key="index">{{item}}</option>
                </select>
            </label>

            <label for="">
              <span>API实现(未包括我国台湾省、香港特别行政区、澳门特别行政区数据，如需相关数据请自行整理。)</span>
              <select name="apiProvince" v-model="apiProvinceVal"> 
                  <option value="0">请选择省</option>
                  <option :value="item.re_code" v-for="(item,index) in apiprovince" :key="index">{{item.re_name}}</option>
                </select>
                <select name="apiCity" v-model="apiCityVal">
                  <option value="0">请选择市/直辖市</option>
                  <option :value="item.re_code" v-for="(item,index) in apicity" :key="index">{{item.re_name}}</option>
                </select>
                <select name="apiCounty" v-model="apiCountyVal">
                  <option value="0">请选择县/区</option>
                  <option :value="item.re_code" v-for="(item,index) in apicounty" :key="index">{{item.re_name}}</option>
                </select>
                <select name="apiTown" v-model="apiTownVal">
                  <option value="0">请选择镇/办事处</option>
                  <option :value="item.re_code" v-for="(item,index) in apitown" :key="index">{{item.re_name}}</option>
                </select>
                <select name="apiVillage" v-model="apiVillageVal">
                  <option value="0">请选择村/居委会</option>
                  <option :value="item.re_code" v-for="(item,index) in apivillage" :key="index">{{item.re_name}}</option>
                </select>
            </label>

            <div class="example6">
              <span>文字阴影效果</span>
              <h3 class="a">I, Augustus (you know who)</h3>
              <h3 class="b">That's extra, of course</h3>
              <h3 class="c">A cat, an apple, etcetera</h3>
              <h3 class="d">With a shovel and some oranges</h3>
            </div>
            <div class="example6">
              <span>线性渐变实现条纹</span>
              <div class="tw"></div>
            </div>
            <div class="example6">
              <span>线性渐变实现图形边框</span>
              <div class="txbk">线性渐变实现图形边框</div>
            </div>
            <div class="example6 yj">
              <p>利用box-shadow 实现边框内圆角</p>
            </div>
            <div class="example6">
              <span>动态边框</span>
              <div class="dtbk"></div>
            </div>


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
  name: 'integration',
  data () {
    return {
      ProvinceVal:'0',
      CityVal:'0',
      CountyVal:'0',

      apiProvinceVal:'0',
      apiCityVal:'0',
      apiCountyVal:'0',
      apiTownVal:'0',
      apiVillageVal:'0',

      apiprovince:[],
      apicity:'',
      apicounty:'',
      apitown:'',
      apivillage:'',
    }
  },
  created(){
    this.$axios.get("/cityapi/region/init")
      .then(res=>{
        this.apiprovince=res.data.prov
      }).catch(function(err){
         console.log(err)
    });
  },
  computed:{
    province:function(){
      var a=[];
      for (var i in this.$store.state.cities) {a.push(i)}
      return a;
    },
    city:function(){
      if(this.ProvinceVal!=0){
        var a=[];
        for (var i in this.$store.state.cities[this.ProvinceVal]) {a.push(i)}
        return a;
      }
    },
    county:function(){
      if(this.ProvinceVal!=0 && this.CityVal!=0){
        return this.$store.state.cities[this.ProvinceVal][this.CityVal];
      }
    },

  },
  watch:{
    ProvinceVal:function(val,oldval){
        this.CityVal=this.city[0],
        this.CountyVal=this.county[0]
    },
    CityVal:function(val,oldval){
        this.CountyVal=this.county[0]
    },



    apiProvinceVal:function(){
      this.$axios.get("/cityapi/region/prov/"+this.apiProvinceVal)
      .then(res=>{
        this.apicity=res.data.city
        this.apiCityVal=res.data.city[0].re_code
      }).catch(function(err){
        //  console.log(err)
      });
    },
    apiCityVal:function(){
      this.$axios.get("/cityapi/region/city/"+this.apiCityVal)
      .then(res=>{
        res.data.county.shift();
        this.apicounty=res.data.county
        this.apiCountyVal=res.data.county[0].re_code
      }).catch(function(err){
        //  console.log(err)
      });
    },
    apiCountyVal:function(){
      this.$axios.get("/cityapi/region/county/"+this.apiCountyVal)
      .then(res=>{
        this.apitown=res.data.town
        this.apiTownVal=res.data.town[0].re_code
      }).catch(function(err){
        //  console.log(err)
      });
    },
    apiTownVal:function(){
      this.$axios.get("/cityapi/region/"+this.apiTownVal)
      .then(res=>{
        this.apivillage=res.data
        this.apiVillageVal=res.data[0].re_code
      }).catch(function(err){
        //  console.log(err)
      });
    },
  },
  mounted(){
     
  }
}
</script>

<style scoped lang="scss">
  .integration{
    padding: 50px 0;
  }
  label{
    display: block;
  }
  select{
    margin: 10px 0;
  }
  div.example6 {
    background: #CCC;
    padding: 1em;
    h3{
        font-size: x-large;
      display: block;
      text-align: center;
      border: none;
      font-style: italic;
    }
  }

  h3.a {    
    color: #D1D1D1;
    text-shadow: -1px -1px white, 1px 1px #333;
    letter-spacing: 2px;
  }
  h3.b {
    color: #C8C8C8;
    text-shadow: 1px 1px white, -1px -1px #444;
    letter-spacing: 2px;
  }
  h3.c{
      color: #BBE;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  h3.d{
        color: white;
        text-shadow: black 0.1em 0.1em 0.2em;
  }

  .yj{
    outline: .6em solid #655;
    box-shadow: 0 0 0 .34em #655;
    border-radius: .8em;
    width: 20em;
    padding: 1em;
    background: tan;
    margin: 20px auto;
    text-align: center;
  }
  div.tw{
    background: linear-gradient(45deg,
  #fb3 25%, #58a 0, #58a 50%,
  #fb3 0, #fb3 75%, #58a 0); background-size: 30px 30px;
      height:300px;
      width:300px;
  }
  div.txbk {
    padding: 0.5em;
    border: 1em solid transparent;
      background: linear-gradient(white, white) padding-box,
                  repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, 
                    #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 6em 6em;
      
      max-width: 20em;
      font: 100%/1.6 Baskerville, Palatino, serif;
  }

  @keyframes ants { to { background-position: 100% 100% } }

div.dtbk {
    padding: 1em;
    border: 1px solid transparent;
    background: linear-gradient(white, white) padding-box,
                repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
    animation: ants 12s linear infinite;
    
    max-width: 20em;
    font: 100%/1.6 Baskerville, Palatino, serif;
}
</style>
