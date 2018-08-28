<template>
  <div class="collection">
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
  name: 'collection',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
