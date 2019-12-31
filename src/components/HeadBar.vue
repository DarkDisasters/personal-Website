<template>
    <div class="navContainer" >
        <el-row :gutter="8">
            <el-col :lg="2" :xl="2" class="avatar">
              <div>
                <el-avatar :src="avatarUrl" shape="square" :size="52" fit="fill"></el-avatar>
              </div>
            </el-col>
            <el-col :lg="3" :xl="3" class="blogname">
                <span class="name">XiXiWang's Blog</span>
            </el-col>
            <el-col :lg="3" :xl="3" class="blank"></el-col>
            <el-col :lg="6" :xl="6" class="search">
              <el-input class = "searchinput" placeholder="search" v-model="input" size="42" clearable>
              </el-input>
            </el-col>
            <el-col :lg="7" :xl="7">
                <Navbar/>
            </el-col>
            <el-col :lg="3" :xl="3">
              <el-button size="large" plain><span>SIGN OUT</span><i class="el-icon-user el-icon--right"></i></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
const avatarUrl = require('@/assets/img/logo.png').default

export default {
    data(){
      return {
        avatarUrl,
        input: '',
      }
    },
    components: {
      Navbar
    }
}
</script>

<style lang="scss" scoped>
.navContainer{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #E6E6E6
}

.el-col{
  height: 64px;
  div{
    height: 64px;
    .el-input__inner{
      padding: 5px 0;
    }
    .el-avatar{
      margin: 5px 0;
      float: right;
      background: white
    }
  }
  
  .searchinput{
    width: 90%;
    height: 64px;
    line-height: 64px;
  }

  .name{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 1.8em;
    color: #409EFF;
    line-height: 64px;  /*设置line-height与父级元素的height相等*/
    overflow: hidden;   /*防止内容超出容器或者产生自动换行*/
  }
}

.el-button{
  height: 64px;
  padding: 0px 0px;
  border: 0px;
  font-size: 16px;
  color: #A6A6A6;
  font-weight: 550;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
    
}
</style>
