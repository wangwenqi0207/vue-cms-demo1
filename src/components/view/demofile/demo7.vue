// element 树形菜单过滤
// 在需要对节点进行过滤时，调用 Tree 实例的filter方法，
//参数为关键字。需要注意的是，此时需要设置filter-node-method，值为过滤函数。

<template>
  <div id="scrollBox" class="add_org">

    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>

    <!-- default-expand-all 是否默认展开所有节点 
    highlight-current 高亮展示选中节点
    -->
    <div style="margin-top:30px">
        <el-tree class="filter-tree" :data="data" :props="defaultProps" 
           default-expand-all highlight-current
          :filter-node-method="filterNode" ref="tree">
        </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo7',
  data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
  },
  watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
}
</script>

<style scoped>

</style>
