<template>
    <div class="mainFrame">
        <el-scrollbar class='page-component__scroll' wrap-class="main" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
            <el-container>
                <router-view></router-view>
                <el-footer>
                    <el-row class="footer">
                        <el-col :span="6">
                            <p>aaa</p>
                            <p>bbb</p>
                            <p>ccc</p>
                        </el-col>
                        <el-col :span="6"></el-col>
                        <el-col :span="6"></el-col>
                        <el-col :span="6">
                            <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :visibility-height=50>
                                
                            </el-backtop>
                        </el-col>
                    </el-row>
                </el-footer>
            </el-container>

        </el-scrollbar>
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
.page-component__scroll{
    height: 100%;
}
.page-component__scroll .el-scrollbar__wrap {
    overflow-x: auto;
}
</style>
