<template>
    <div class="paperdiv">
        <el-container>
            <el-aside width="200px">
                <el-scrollbar class='aside-component__scroll' wrap-class="aside" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
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
                        <el-submenu index="flask">
                            <template slot="title">Tornado</template>
                                <el-menu-item index='/paper/python/tornado/basic'>
                                    <span slot="title">Tornado 基础操作</span>
                                </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style>
