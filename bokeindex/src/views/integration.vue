<template>
  <div class="integration">
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
  name: 'integration',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
