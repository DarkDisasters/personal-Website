<template>
    <div class="paperdiv">
        <el-container style="padding: 0px 70px">
            <el-aside class = "sidenav" width="200px">
                <el-scrollbar class='aside-component__scroll' wrap-class="aside" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box-pythonview" :native="false">
                    <el-menu router default-active="pythonbasic" class="el-menu-python">
                        <el-submenu index="pythonbasic">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">Python Basic</span>
                            </template>
                            <el-menu-item index="/paper/python/pythonbasic/typeconversion">
                                <span slot="title">类型转换</span>
                            </el-menu-item>
                            <el-menu-item index="/paper/python/pythonbasic/string">
                                <span slot="title">字符串操作</span>
                            </el-menu-item>
                            <el-submenu index="array">
                                <template slot="title">数组操作</template>
                                <el-menu-item index="/paper/python/pythonbasic/array/add">
                                    <span slot="title">数组相加</span>
                                </el-menu-item>
                                <el-menu-item index="/paper/python/pythonbasic/array/divide">
                                    <span slot="title">数组相除</span>
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="/paper/python/flask">
                            <span slot="title">Flask</span>
                        </el-menu-item>
                        <el-submenu index="tornado">
                            <template slot="title">Tornado</template>
                                <el-menu-item index='/paper/python/tornado/basic'>
                                    <span slot="title">Tornado 基础操作</span>
                                </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main>
                <div class="pythoncontentdiv">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.paperdiv{
    // overflow: hidden;
}

.sidenav{
    overflow: hidden;
}

.el-menu-python{
    background-color: #FAFAFA;
    border: 0px;
}

.pythoncontentdiv{
    height: 100%;
    background-color: #eeeeee;
    // border-left: 1px solid #bebebe 
}

.view-box-pythonview{
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    height: 100%;
}

.aside-component__scroll{
    width: 100%;
    height: 100%;
}

// .aside-component__scroll .el-scrollbar{
//     margin-right: -17px;
// }

.aside-component__scroll .el-scrollbar__wrap {

    // height: 100%;
    // width: 100%;
    // overflow: scroll;
    overflow-x: auto;
    // max-height: 300px;
    
}

.aside-component__scroll .el-scrollbar__bar.is-vertical{
    // height: 100%;
    // padding-left: 15px;
    margin-top: 20px;
}


</style>
