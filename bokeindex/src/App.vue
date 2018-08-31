<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
    html,body{
        height: 100%;
    }
    #app{
        width: 100%;
        height: 100%;
    }
    .main,.view{
        width: 1024px;
        margin: 0 auto;
    }
</style>
