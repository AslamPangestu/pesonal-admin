<template>
  <el-dialog :visible.sync="value" :show-close="false" width="30%" center>
    <span slot="title">
      <h4 class="dialog-title">{{ title }}</h4>
    </span>
    <div class="dialog-content">
      <slot />
    </div>
    <span slot="footer" class="dialog-footer">
      <base-button class="btn-link" type="danger" @click.prevent="onCancel">
        Cancel
      </base-button>
      <base-button class="btn-link" type="success" @click.prevent="onConfirm">
        Confirm
      </base-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'ModalConfirmComponent',
  props: {
    value: { type: Boolean, default: false },
    title: { type: String, default: '' },
  },
  methods: {
    onConfirm() {
      this.$emit('input', false)
      this.$emit('confirm')
    },
    onCancel() {
      this.$emit('input', false)
    },
  },
}
</script>
