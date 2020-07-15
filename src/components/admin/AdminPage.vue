
<template>
    <el-container>
      <el-header>
        功能列表
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-blue" >订单录入</div>
            <div class="grid-content bg-blue" >订单修改</div>
            <div class="grid-content bg-blue" >订单确认</div>
            <div class="grid-content bg-blue" >订单查询</div>
            <div class="grid-content bg-blue" >库存查询</div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-col>
           @copyright 国药集团药业股份有限公司
        </el-col>
        <erl-col>
          <el-button @click="logout" >
            退出
          </el-button>
        </erl-col>
      </el-footer>
    </el-container>
</template>

<script>
export default {
  /* eslint-disable */ 
  data() {
    return {
     sysUserName:''
   }
  },
  methods:{
    logout() {
      const that = this;
      this.$confirm('确认退出？', '提示',{

      }).then(() => {
        sessionStorage.removeItem('user');
        that.$router.push('/')
      }).catch(err=>{
        console.error(err);
      })
    }
  }
}
</script>

<style scoped>

</style>
