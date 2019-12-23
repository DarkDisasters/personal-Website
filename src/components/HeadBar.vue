<template>
    <div class="navContainer" >
        <el-row :gutter="8">
            <el-col :lg="2" :xl="2" class="avatar">
              <div>
                <el-avatar :src="avatarUrl" shape="square" :size="60" fit="fill"></el-avatar>
              </div>
            </el-col>
            <el-col :lg="4" :xl="4"><div class="grid-content bg-purple">name</div></el-col>
            <el-col :lg="2" :xl="2"><div class="grid-content bg-purple-light">blank</div></el-col>
            <el-col :lg="6" :xl="6"><div class="grid-content bg-purple">search</div></el-col>
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
        avatarUrl
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
  div{
    height: 64px;
    .el-avatar{
      float: right;
      background: white
    }
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
