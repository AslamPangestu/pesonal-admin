<template>
  <card
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    card-body-classes="table-full-width"
  >
    <div class="d-flex justify-content-between">
      <h4 slot="header" class="card-title">{{ title }}</h4>
      <nuxt-link :to="`${currentPath}/create`">
        <base-button
          v-if="canCreated"
          native-type="submit"
          type="primary"
          class="btn-fill"
        >
          Create
        </base-button>
      </nuxt-link>
    </div>
    <el-table :data="data">
      <template v-for="column in columns">
        <el-table-column
          :key="column.id"
          :min-width="minWidth(column.minWidth)"
          :sortable="sortable(column.sortable)"
          :label="stringValue(column.label)"
          :property="stringValue(column.property)"
          :align="align(column.align)"
          :header-align="align(column.headerAlign)"
        />
      </template>
      <template v-if="canAction">
        <el-table-column
          min-width="150"
          label="Actions"
          header-align="center"
          align="center"
          style="margin-top: 16px"
        >
          <template slot-scope="scope">
            <nuxt-link :to="`${currentPath}/${scope.row.id}`">
              <base-button v-if="canView" size="sm" link type="info"
                ><i class="fas fa-eye" />
              </base-button>
            </nuxt-link>
            <nuxt-link :to="`${currentPath}/${scope.row.id}/edit`">
              <base-button v-if="canEdit" size="sm" link type="warning"
                ><i class="fas fa-pencil-alt" />
              </base-button>
            </nuxt-link>
            <base-button
              v-if="canDelete"
              size="sm"
              link
              type="danger"
              @click="handleDelete(scope.row)"
              ><i class="fas fa-trash" />
            </base-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="d-flex justify-content-center">
      <el-pagination
        hide-on-single-page
        background
        :layout="layout"
        :total="1000"
        :current-page.sync="currentPage"
      />
    </div>
  </card>
</template>
<script>
import { Table, TableColumn, Pagination } from 'element-ui'

export default {
  name: 'BaseTable',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Pagination.name]: Pagination,
  },
  props: {
    title: { type: String, default: '' },
    data: { type: Array, default: () => [] },
    currentPage: { type: Number, default: 1 },
    loading: { type: Boolean, default: false },
    actions: {
      type: Array,
      description: 'create|edit|view|delete',
      default: () => [],
    },
    columns: {
      type: Array,
      // {
      //     minWidth: '0',
      //     sortable: false,
      //     align: 'left',
      //     headerAlign: 'left',
      //     label: '',
      //     property: '',
      // }
      default: () => [],
    },
  },
  computed: {
    currentPath() {
      return this.$route.path
    },
    canCreated() {
      return this.actions.includes('create')
    },
    canEdit() {
      return this.actions.includes('edit')
    },
    canView() {
      return this.actions.includes('view')
    },
    canDelete() {
      return this.actions.includes('delete')
    },
    canAction() {
      return this.canEdit || this.canView || this.canDelete
    },
    layout() {
      if (this.currentPage === 1) {
        return 'pager, next'
      }
      return 'prev, pager, next'
    },
  },
  methods: {
    // DEFAULT VALUES
    minWidth(val) {
      if (val) {
        return val
      }
      return '150'
    },
    stringValue(val) {
      if (val) {
        return val
      }
      return ''
    },
    sortable(val) {
      if (val) {
        return val
      }
      return false
    },
    align(val) {
      if (val) {
        return val
      }
      return 'left'
    },
    // HANDLER
    handleDelete(row) {
      // console.log('handleDelete', index, row)
    },
  },
}
</script>
