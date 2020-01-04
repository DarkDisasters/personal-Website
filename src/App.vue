<template>

    <div class="app-container">
        <el-container>
            <el-header style="height:64px">
                <Headbar/>
            </el-header>
            <!-- <el-scrollbar class='page-component__scroll' wrap-class="main" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false"> -->
                <el-main>
                    <Mainpage/>
                </el-main>
            <!-- </el-scrollbar> -->
        </el-container>
        
    </div>
     
</template>

<script>
import Headbar from './components/HeadBar.vue'
import Mainpage from './components/Mainpage.vue'

export default {
    components:{
        Headbar,
        Mainpage
    }
}
</script>

<style lang="scss" scoped>

.app-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
    // background-color: #F4F4F5;
    overflow: hidden;
}
.el-header{
    background-color: white
}

.el-main{
    padding-right: 0px;
}

// .page-component__scroll{
//     height: 100%;
// }
// .page-component__scroll .el-scrollbar__wrap {
//     overflow-x: auto;
//     // width: 110%; height: 120%;
//     min-height: 200px;
// }


</style>
