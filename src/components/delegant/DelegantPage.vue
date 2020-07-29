<template>
  <el-container>
      <el-header>
        订单列表
      </el-header>
      <el-main>
        <div>
  <router-link to=queryOrder >订单查看</router-link>
  <router-link to="validateOrder">订单确认</router-link>
</div>
<router-view></router-view>
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
/* eslint-disable */ 
  export default {
    
    data() {
      return {
        storageData:[],//库存查询tab数据
        orderData:[] //订单查询tab数据
      };
    },
    mounted:function(){
      this.userId = sessionStorage.getItem("pathid");
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      logout() {
      this.$confirm('确认退出？', '提示',{

      }).then(() => {
        sessionStorage.removeItem('user');
        this.$router.push('/')
      }).catch(err=>{
        console.error(err);
      })
    },
    }
  };
</script>