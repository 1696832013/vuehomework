<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="formBox">
      <el-form-item label="活动名称">
        <s-validate #default="{validate}" :rules="rules" :value="form.name">
          <el-input v-model="form.name" @blur="validate" />
        </s-validate>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
          <!-- <el-option label="区域二" value="beijing" /> -->
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type" />
          <el-checkbox label="地推活动" name="type" />
          <el-checkbox label="线下主题活动" name="type" />
          <el-checkbox label="单纯品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SValidate from './svalidate.vue'
import { getFormOptions } from '@/api/selections.js'
export default {
  components: {
    SValidate
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [],
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value)
          },
          message: '请至少包含一个数字 '
        }
      ]
    }
  },
  created() {
    getFormOptions().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items } = data
        this.options = items
      }
      console.log('test', this.options)
    })
  }
}
</script>

<style lang="scss" scoped>
.formBox{
  width: 100%;
  padding:100px ;
}
</style>
