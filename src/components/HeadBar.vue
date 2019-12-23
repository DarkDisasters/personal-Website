<template>
    <div class="navContainer" >
        <el-row :gutter="8">
            <el-col :lg="1" :xl="1" class="avatar">
              <div>
                <el-avatar :src="avatarUrl" shape="square" :size="54" fit="fill"></el-avatar>
              </div>
            </el-col>
            <el-col :lg="4" :xl="4" class="blogname">
                <span class="name">XiXiWang's Blog</span>
            </el-col>
            <el-col :lg="3" :xl="3" class="blank"></el-col>
            <el-col :lg="6" :xl="6" class="search">
              <el-input class = "searchinput" placeholder="search" v-model="input" size="42" clearable>
              </el-input>
            </el-col>
            <el-col :lg="8" :xl="8">
                <Navbar/>
            </el-col>
            <el-col :lg="2" :xl="2"><div class="grid-content bg-purple-light">login</div></el-col>
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
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
    font-size: 1.8em;
    color: #409EFF;
    line-height: 64px;  /*设置line-height与父级元素的height相等*/
    overflow: hidden;   /*防止内容超出容器或者产生自动换行*/
  }
}



  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 64px;
  }
</style>
