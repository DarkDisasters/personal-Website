<template>
    <div class="homepage">
        <el-container style="padding: 0px 70px">
            <el-aside width="350px" class="mybasicinfo">
                <div class="avatardiv">
                    <el-avatar :src="myavatarUrl" class="myavatar" shape="square" :size="200" fit="contain"></el-avatar>
                </div>
                <div class="info">
                    <div class="githublink">
                        <span>Github主页 <a href="https://github.com/DarkDisasters">https://github.com/DarkDisasters</a></span>
                
                    </div>
                </div>
            </el-aside>
            <el-main class="mycontent">
                
            </el-main>
        </el-container>
    </div>
</template>

<script>
const myavatarUrl = require('@/assets/img/avatar1.png').default

export default {
    data(){
        return {
            myavatarUrl,
        }
    }
}
</script>

<style lang="scss">
.mybasicinfo{
    background-color: #939393
}
.avatardiv{
    margin-top: 30px;
    text-align: center;
}
.myavatar{
    background-color: #FAFAFA
   
}

.el-avatar>img{
    width: 100%;
}

.mycontent{
    background-color: #939393;
    margin-left: 100px;
    margin-right: 150px;
}
</style>
