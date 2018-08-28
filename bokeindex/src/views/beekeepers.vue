<template>
  <div class="beekeepers">
      <MyHead></MyHead>

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
  name: 'beekeepers',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
