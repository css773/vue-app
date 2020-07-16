
<template>
    <el-container>
      <el-header>
        订单列表
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <router-link to="/admin/addOrder">订单录入</router-link>
            <router-link to="/admin/queryOrder">订单查询</router-link>
            <router-link to="/admin/storageQuery">库存查询</router-link>
            <div>
              <router-view></router-view>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-col>
           @copyright 国药集团药业股份有限公司
        </el-col>
        <el-col>
          <el-button @click="logout" >
            退出
          </el-button>
        </el-col>
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
