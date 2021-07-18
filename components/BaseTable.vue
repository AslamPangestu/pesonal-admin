<template>
  <card v-loading="loading" card-body-classes="table-full-width">
    <div class="row" />
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
              <el-tooltip
                class="item"
                effect="dark"
                content="Detail"
                placement="top"
              >
                <base-button v-if="canView" size="sm" link type="info"
                  ><i class="fas fa-eye" />
                </base-button>
              </el-tooltip>
            </nuxt-link>
            <nuxt-link :to="`${currentPath}/${scope.row.id}/edit`">
              <el-tooltip
                class="item"
                effect="dark"
                content="Edit"
                placement="top"
              >
                <base-button v-if="canEdit" size="sm" link type="warning"
                  ><i class="fas fa-pencil-alt" />
                </base-button>
              </el-tooltip>
            </nuxt-link>

            <el-tooltip
              class="item"
              effect="dark"
              content="Delete"
              placement="top"
            >
              <base-button
                v-if="canDelete"
                size="sm"
                link
                type="danger"
                @click="handleDelete(scope.row)"
                ><i class="fas fa-trash" />
              </base-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- PAGINATION -->
    <div class="d-flex justify-content-center">
      <el-pagination
        hide-on-single-page
        background
        :layout="layout"
        :total="1000"
        :current-page.sync="currentPage"
      />
    </div>
    <!-- DIALOG DELETE -->
    <modal-confirm v-model="showDelete" title="Confirm" @confirm="onOkDelete">
      <div>Apakah anda yakin ingin menghapus data berikut?</div>
      <table>
        <tbody>
          <tr v-for="(item, idx) in deleteContent" :key="idx">
            <td>
              <b>{{ item.label }}</b>
            </td>
            <td style="width: 16px; text-align: center">:</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </modal-confirm>
  </card>
</template>
<script>
import { Table, TableColumn, Pagination } from 'element-ui'
import ModalConfirm from '@/components/Modal/Confirm'

export default {
  name: 'BaseTable',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Pagination.name]: Pagination,
    ModalConfirm,
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
  data() {
    return {
      showDelete: false,
      deleteData: {},
    }
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
    deleteContent() {
      const res = []
      this.columns.forEach((item) => {
        res.push({ label: item.label, value: this.deleteData[item.property] })
      })
      return res
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
      this.showDelete = true
      this.deleteData = row
      // console.log('handleDelete', index, row)
    },
    onCancleDelete() {
      this.showDelete = false
    },
    onOkDelete() {
      this.$emit('delete', this.deleteData)
      this.showDelete = false
    },
  },
}
</script>
