<template>
<a-table class="table" :columns="columns" :rowKey="record => record.login.uuid" :dataSource="data" :pagination="pagination" :loading="loading" @change="handleTableChange">
    <template slot="title">
        <h3>Registred Users</h3>
    </template>
    <template slot="name" slot-scope="name">
        {{name.first}} {{name.last}}
    </template>
</a-table>
</template>

<script>
import {
  apiRequest
} from '@/core/Admin/admin.services'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  width: '20%',
  scopedSlots: {
    customRender: 'name'
  }
},
{
  title: 'Gender',
  dataIndex: 'gender',
  filters: [{
    text: 'Male',
    value: 'male'
  }, {
    text: 'Female',
    value: 'female'
  }],
  width: '20%'
},
{
  title: 'Email',
  dataIndex: 'email'
}
]

export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      const pager = {
        ...this.pagination
      }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch (params = {}) {
      this.loading = true
      apiRequest({
        results: 100,
        ...params
      })
        .then(({
          data
        }) => {
          const pagination = {
            ...this.pagination
          }
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 1000
          this.loading = false
          this.data = data.results
          this.pagination = pagination
        })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss";

.table {
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 6px;
    background: #fff;
    color: #333;
    .ant-table-title {
        padding-right: 10px;
        padding-left: 10px;
    }
}
.ant-table-pagination.ant-pagination {
    float: right;
    margin: 16px;
}
.ant-pagination-item:hover a,
.ant-pagination-item-active:focus a,
.ant-pagination-item-active:hover a,
.ant-pagination-item-active a  {
    color: $color-primary-dark;
}

.ant-pagination-prev:focus .ant-pagination-item-link,
.ant-pagination-next:focus .ant-pagination-item-link,
.ant-pagination-prev:hover .ant-pagination-item-link,
.ant-pagination-next:hover .ant-pagination-item-link {
    color: $color-primary-dark;
    border-color: $color-primary-dark;
}

.ant-pagination-item:focus, .ant-pagination-item:hover {
    border-color: $color-primary-dark;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.ant-pagination-item-active {
    font-weight: 500;
    border-color: $color-primary-dark;
}
</style>
