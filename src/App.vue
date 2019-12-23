<template>
    <div class="app-container">
        <el-container>
            <el-header style="height:64px">
                <Headbar/>
            </el-header>
            <el-main>
                Main
            </el-main>
            <el-footer>
                Footer
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Headbar from './components/HeadBar.vue'

export default {
    components:{
        Headbar
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
}
.el-header{
    background-color: white
}

</style>
