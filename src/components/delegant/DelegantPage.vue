<template>
  <el-container>
      <el-header>
        订单列表
      </el-header>
      <el-main>
       <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="center">
    <el-tab-pane label="订单查询" name="first" >
      <el-table
      :data="checkData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="订单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </el-tab-pane>
    <el-tab-pane label="库存查询" name="second">
      <el-table
      :data="storageData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="位置"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </el-tab-pane>
  </el-tabs>
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
        activeName: 'first',
        storageData:[],//库存tab数据
        checkData:[] //查询tab数据
      };
    },
    created(){

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getInfo(){
        this.$axios.get('/api')
        .then((response)=>{
          this.checkData = response.data;
        }).catch((error)=>{
          console.error(error);
        })
      },
      getStorage(){
        this.$axios.get('/api')
        .then((res)=>{
          this.storageData = res.data;
        }).catch((error)=>{
          console.log(error);
        })
      },
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
  };
</script>