<template>
    <div class="homepage">
        <el-container class = "outtercontainer"  style="padding: 0px 0px 0px 70px">
            <el-aside class="mybasicinfo">
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
                <el-scrollbar class='page-component__scroll' wrap-class="main" wrap-style="" view-style="font-weight: bold;" view-class="view-box-homepage" :native="false">
                
                <el-main class="mycontent">
                    <!-- <router-view></router-view> -->
                    <div class="contentdiv">
                        <div class="vitadiv">
                            <div class="textdiv">
                                <h2>个人简历</h2>
                                <p>本人现在研究生在读，在深圳大学读软件工程专业，研究的方向是数据可视化。</p>
                                <p>在IEEE VIS上发表了一篇文章，本人是第二作者，文章名为《Winglets: Visualizing Association with Uncertainty in Multi-class Scatterplots》，刊载在TVCG上。</p>
                                <p>目前正在加强前端的相关学习，包括但不限于VUE，ElementUI等。</p>
                            
                            </div>
                            <div class="picdiv">
                                <el-image :src="vitaPicUrl" style="width: 190px; height: 190px" fit="fit" class="homeimg"></el-image>
                            </div>                          
                        </div>

                        <div class="separatediv"></div>

                        <div class="learninterestdiv">
                            <div class="textdiv">
                                <h2>最近学习兴趣相关</h2>
                                <p>最近要找工作了，就去补一下相关的知识，发现要补的很多，简单列下。</p>
                                <p>前端：js基础，Vue.js的使用，css，elementUI的使用(前端组件好多，选了这个也不知道好不好)。</p>
                                <p>后端：node.js，python(现在更倾向于学node.js)。</p>
                                <p>科研：研究格式塔法则于散点图上的运用(不过最近idea好像有点问题)。</p>
                            </div>
                            <div class="picdiv">
                                <el-image :src="learninterestPicUrl" style="width:190px; height:190px" fit="fit" class="homeimg"></el-image>
                            </div>
                        </div>

                        <div class="separatediv"></div>

                        <div class="entertaindiv">
                            <div class="textdiv">
                                <h2>最近娱乐兴趣</h2>
                                <p>爱好太广泛了，以致于耽误了很多时间，很有点玩物丧志，不过不知道该在主页上放啥，就先放这个好了。</p>
                                <p>游戏：最爱ARPG游戏，最近在玩Devil May Cry5(只有打折的时候买的起)，Divinity: Original Sin II。</p>
                                <p>综艺：Running Man，新西游记。</p>
                            </div>
                            <div class="picdiv">
                                <el-image :src="entertaindivPicUrl" style="width:190px; height:190px" fit="contain" class="homeimg"></el-image>
                            </div>
                        </div>

                        <div class="separatediv"></div>

                        <div class="gongwuyuandiv">
                            <div class="textdiv">
                                <h2>打算考公务员啦</h2>
                                <p>最近在室友的怂恿下决定考公务员，其实不是很像考，但还是找了点视频看，还买了几本书，但是买了书后不知道为啥不怎么看视频了</p>
                            </div>
                            <div class="picdiv" style="background-image">
                                <el-image :src="gongwuyuanPicUrl"  fit="contain" class="homeimg"></el-image>
                            </div>
                        </div>

                        <div class="separatediv"></div>

                        <div class="gongwuyuandiv">
                            <div class="textdiv">
                                <h2>testDiv</h2>
                                <p>最近在室友的怂恿下决定考公务员，其实不是很像考，但还是找了点视频看，还买了几本书，但是买了书后不知道为啥不怎么看视频了</p>
                            </div>
                            <div class="picdiv">
                                <el-image :src="gongwuyuanPicUrl" style="width:190px; height:190px" fit="contain" class="homeimg"></el-image>
                            </div>
                        </div>
                    </div>
                </el-main>

                <el-footer>
                    <el-row class="footer">
                        <el-col :span="18" class="pagecount">
                            <el-pagination
                                @current-change='handleCurrentChange'
                                :current-page.sync="currentpage"
                                background
                                layout="prev, pager, next"
                                :total="1000">
                            </el-pagination>
                            <!-- <span>{{currentpage}}</span> -->
                        </el-col>
                        <el-col :span="6">
                            <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :visibility-height=50>
                            </el-backtop>
                        </el-col>
                    </el-row>
                    <!-- <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination> -->
                    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :visibility-height=50>
                    </el-backtop> -->
                </el-footer>
                </el-scrollbar>
            </el-container>
            
        </el-container>
    </div>
</template>

<script>
const myavatarUrl = require('@/assets/img/avatar1.png').default
const vitaPicUrl = require('@/assets/img/avatar-3.png').default 
const learninterestPicUrl = require('@/assets/img/avatar-2.png').default
const entertaindivPicUrl = require('@/assets/img/avatar1.png').default
const gongwuyuanPicUrl = require('@/assets/img/logo.png').default

export default {
    data(){
        return {
            myavatarUrl,
            vitaPicUrl,
            learninterestPicUrl,
            entertaindivPicUrl,
            gongwuyuanPicUrl,
            currentpage: 1,
        }
    },
    methods:{
        handleCurrentChange(){
            this.$router.push({name: 'homepage', params:{page: this.currentpage}})
            console.log(this.currentpage)
        }
    }
}
</script>

<style lang="scss">
.homepage{
    overflow: hidden;
    height: 100%;
    // width: 100%;
    // height: 1000px;
}
.outtercontainer{
    height: 100%;
    overflow: hidden;
    // position: relative;
    // height: 1000px;
}

.mybasicinfo{
    // width:350px;
    width: 25%;
    // background-color: #b9b7b7
}
.avatardiv{
    margin-top: 30px;
    text-align: center;
}
.myavatar{
    background-color: #FAFAFA;
    // background-color: #F4F4F5
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
    // margin-top: 25px;
    margin-left:27px;
    // width: 300px;
    // span{
    //     display: inline-block;
    // }
}

.githubspan, .csdnspan{
    display: inline-block;
    margin-top: 4px;
}

.mainandfooter{
    width: 75%;
    height: 700px;
    // height: 500px;
    // border-left: 2px solid #EEEEEE;
    border-radius: 2px;
    margin-left: 50px;
    // margin-right: 150px;
    // height: 100%;
}

.mycontent{
    // background-color: #939393;
    padding-right: 150px;
    // margin-left: 50px;
    // margin-right: 150px;
    
}

.contentdiv{
    margin-top: 10px;
    margin-left: 50px;
    // height: 1000px;
    // background-color: #EEEEEE;
}

// h2{
//     color: rgb(32, 32, 32);
//     font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
// }

.textdiv{
    float: left;
    height: 100%;
    width: 70%;
}

.picdiv{
    float:right;
    height: 100%;
    width: 30%;
}

.homeimg{
    float: right;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 2em;
    // background-color: #FAFAFA
    background-color: #FFFFFF
}

.separatediv{
    height: 50px;
    width: 100%;
}

p{
    margin: 3px 0px;
    // font-size: 1.2em;
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.5em;
}

.vitadiv{
    // border: 2px solid #EEEEEE;
    height: 200px;
}

.learninterestdiv{
    // border: 2px solid #EEEEEE;
    height: 200px;
}

.entertaindiv{
    // border: 2px solid #EEEEEE;
    height: 200px;
}

.gongwuyuandiv{
    // border: 2px solid #EEEEEE;
    height: 200px;
}

.footer{
    margin-top: 50px;
    margin-bottom: 90px;
}

.pagecount{
    text-align: center;
}

.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #939393;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover{
    color: #a09898
}

.view-box-homepage{
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    // height: 100%;
}


.page-component__scroll{
    width: 100%;
    // height: 100%;
    
}
.el-scrollbar__wrap {
    // overflow: scroll;
    overflow-x: auto;
    // height: 100%;
}
// .el-scrollbar__view{
//     height: 100%;
// }


.el-scrollbar__bar.is-vertical{
    margin-top: 25px;
    // height: 100%;
}
</style>
