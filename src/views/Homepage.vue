<template>
    <div class="homepage">
        <el-container class = "outtercontainer"  style="padding: 0px 0px 0px 70px">
            <el-aside width="350px" class="mybasicinfo">
                <div class="avatardiv">
                    <el-avatar :src="myavatarUrl" class="myavatar" shape="square" :size="300" fit="contain"></el-avatar>
                </div>
                <div class="info">
                    <div class="detaildiv">
                        <span>深圳大学硕士在读</span> &nbsp;
                        <span>软件工程专业</span><br/>
                        <span class="githubspan">Github主页&nbsp;&nbsp;<a href="https://github.com/DarkDisasters"> github.com/DarkDisasters</a></span>
                        <span class="csdnspan">csdn博客&nbsp;&nbsp;<a href="https://blog.csdn.net/disasters"> blog.csdn.net/disasters</a></span>
                    </div>
                </div>
            </el-aside>
           
            <el-container class="mainandfooter">
                <el-scrollbar class='page-component__scroll' wrap-class="main" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
                
                <el-main class="mycontent">
                    <div class="contentdiv">

                    </div>
                </el-main>

                <el-footer>
                    <el-row class="footer">
                        <el-col :span="6">
                            <p>aaa</p>
                            <p>bbb</p>
                            <p>ccc</p>
                            <p>ddd</p>
                            <p>eee</p>
                            <p>fff</p>
                            <p>ggg</p>
                            <p>ggg</p>
                            <p>ggg</p>
                            <p>ggg</p>
                            
                        </el-col>
                        <el-col :span="6"></el-col>
                        <el-col :span="6"></el-col>
                        <el-col :span="6">
                            <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :visibility-height=50>
                            </el-backtop>
                        </el-col>
                    </el-row>
                </el-footer>
                </el-scrollbar>
            </el-container>
            
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
.homepage{
    // height: 1000px;
}
.outtercontainer{
    height: 1000px;
}

.mybasicinfo{
    background-color: #b9b7b7
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

.info{
    
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #939393;
    font-size: 0.95em;
}

.detaildiv{
    margin-top: 25px;
    margin-left: 50px;
    width: 300px;
    span{
        display: inline-block;
    }
}

.githubspan, .csdnspan{
    display: inline-block;
    margin-top: 4px;
}

.mainandfooter{
    border-left: 2px solid #EEEEEE;
    border-radius: 2px;
    margin-left: 50px;
    // margin-right: 150px;
    // height: 100%;
}

.mycontent{
    // background-color: #939393;
    padding-right: 130px;
    // margin-left: 50px;
    // margin-right: 150px;
    
}

.contentdiv{
    margin-top: 10px;
    margin-left: 50px;
    height: 1000px;
    background-color: #EEEEEE;
}

.page-component__scroll{
    width: 100%;
    
}
.el-scrollbar__wrap {
    // overflow: scroll;
    overflow-x: auto;
    height: 100%;
    
}
// .el-scrollbar__view{
//     height: 100%;
// }


.el-scrollbar__bar.is-vertical{
    margin-top: 25px;
    height: 100%;
}
</style>
