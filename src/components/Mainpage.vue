<template>
    <div class="mainFrame">
        <!-- <el-scrollbar class='page-component__scroll' wrap-class="main" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false"> -->
            <!-- <el-container> -->
                <router-view></router-view>
                
            <!-- </el-container> -->
        <!-- </el-scrollbar> -->
       
    </div>

</template>

<script>
export default {
    data() {
        return {
           
        }
    },
}
</script>

<style lang="scss" scoped>
.mainFrame{
    overflow: hidden;
}
// .page-component__scroll{
//     height: 100%;
// }
// .page-component__scroll .el-scrollbar__wrap {
//     overflow-x: auto;
// }

</style>
