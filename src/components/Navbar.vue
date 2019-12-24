<template>
    <div class = "navbar">
        <el-menu :default-active="activeIndex" mode="horizontal">
            <el-menu-item index = "1">首页</el-menu-item>
            <el-menu-item index = "2">一些效果</el-menu-item>
            <el-submenu index = "3">
                <template slot="title">文章类别</template>
                <el-menu-item index = "3-1">Python</el-menu-item>
                <el-menu-item index = "3-2">Javascript</el-menu-item>
                <el-menu-item index = "3-3">Algorithm</el-menu-item>
                <el-menu-item index = "3-4">xxx</el-menu-item>
                <el-menu-item index = "3-5">xxx</el-menu-item>
            </el-submenu>
            <el-menu-item index = "4">新增文章</el-menu-item>
        </el-menu>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            activeIndex: '1'
        }
    }
}
</script>

<style lang="scss">
.el-menu--horizontal>.el-menu-item{
    height: 64px;
  
}

.el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 64px;
}


</style>
