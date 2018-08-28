<template>
    <div class="sidebar">
        <div class="refresh hvr-icon-buzz-out">
            <i class="hvr-icon  iconfont icon-jiazai_shuaxin"></i>
            <p>换一些内容</p>
        </div>
        <div class="more hvr-icon-buzz-out">
            <i class="hvr-icon iconfont icon-iosgengduo"></i>
            <p>查看全部</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'sidebar',
    data(){
        return {
            
        }
    }
}
</script>

<style scoped lang="scss">
.sidebar{
    width: 222px;;
    height: 180px;
    background: rgba(0,0,0,0.8);
    color: #eee;
    display: flex;
    justify-content: space-around;
    .refresh,.more{
        width: 50%;
        height: 80px;
        text-align: center;
        margin: 50px 0;
        cursor: pointer;
        i{
            font-size: 20px;
        }
    }
}
</style>