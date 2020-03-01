<template>
    <div>
        <el-button type="primary" @click="exportExcel">导出成Excel文件</el-button>

    <el-table
      :data="tableData"
      style="width: 100%"
      id='out-table'
      >
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
</template>


<script>
//引入安装的依赖
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: 'demo5',
   data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
  methods:{
      // XLSX.uitls.table_to_book( 放入的是table 的DOM 节点 ) ，sheetjs.xlsx 即为导出表格的名字，可修改！
      exportExcel () {
         var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
         var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
         try {
             FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheetjs.xlsx')
         } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
         return wbout
     },
  }
}

</script>

<style scoped>
.el-table{
    margin-top:30px;
}
</style>