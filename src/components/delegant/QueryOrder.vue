<template>
<el-form ref="form" :model="form" label-width="80px" size="medium">
  <el-page-header @back="goBack" content="订单查询">
</el-page-header>
  <el-form-item label="订单编号" label-width="left">
    <el-input type="textarea" v-model="form.billNumber"></el-input>
  </el-form-item>
  <el-form-item label="录入人" label-width="left">
    <el-input type="textarea" v-model="form.commander"></el-input>
  </el-form-item>
  <el-form-item label="订单状态" label-width="left" >
    <el-select v-model="form.status" placeholder="未选择">
      <el-option label="未完成" value="unfinished"></el-option>
      <el-option label="部分完成" value="partFinished"></el-option>
      <el-option label="已完成" value="Finished"></el-option>
      <el-option label="待配货" value="WaitingDispatch"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="货品" label-width="left">
    <el-input type="textarea" v-model="form.goods"></el-input>
  </el-form-item>
  <el-form-item label="客户" label-width="left">
     <el-select v-model="form.clientData" @change="selectChange" placeholder="全部">
      <el-option v-for="client in clients" label="client.name" :key="client.name" :value="client.name"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.endDate"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
/* eslint-disable */
  export default {
    name: "QueryOrder",
    data() {
      return {
        form: {
          billNumber: '',
          commander: '',
          status: '',
          goods: '',
          delivery: false,
          client: [],
          date1:'',
          date2:''
        }
      }
    },
    created(){

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      goBack(){
          this.$router.back(-1);
      },
      getAllClients(){
          this.$axios.get('/')
      }
    }
  }
</script>
