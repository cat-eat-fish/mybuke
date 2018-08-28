import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    changeblack:true,
    headactive:0,
    pagecur:1,
    
    // 指定时间格式化
    formatDate(time){
      var date = new Date(time);
      var year = date.getFullYear(),
          month = date.getMonth() + 1,//月份是从0开始的
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
          month=month<10 ? '0'+month : month;
          day=day<10 ? '0'+day : day;
          hour=hour<10 ? '0'+hour : hour;
          min = min < 10 ? '0' + min : min;
          sec = sec < 10 ? '0' + sec : sec;
          var newTime = year + '-' +
                      month + '-' +
                      day + ' ' +
                      hour + ':' +
                      min + ':' +
                      sec;
          return newTime;         
      },
  },
  mutations: {
    newchangeblack(state,msg){
      state.changeblack=msg;
    },
    newheadactive(state,msg){
      state.headactive=msg;
    },
    newpagecur(state,msg){
      state.pagecur=msg;
    },


  },
  actions: {

  }
})
