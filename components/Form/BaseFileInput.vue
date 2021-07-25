<template>
  <div class="form-group">
    <slot name="label">
      <label v-if="label"> {{ label }}</label>
    </slot>
    <el-upload
      ref="upload"
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :on-preview="_handlePictureCardPreview"
      :file-list="fileList"
      :disabled="disabled"
      multiple
    >
      <i slot="default" class="el-icon-plus"></i>
    </el-upload>
    <el-dialog
      :visible.sync="dialogVisible"
      fullscreen
      custom-class="dialog-preview"
    >
      <img class="image-preview" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BaseFileInput',
  props: {
    disabled: Boolean,
    label: {
      type: String,
      description: 'File Input label',
      default: '',
    },
    defaultImages: {
      type: Array,
      description: 'List Default Image',
      default: () => [],
    },
  },
  data() {
    return {
      fileList: [],
      dialogVisible: false,
      dialogImageUrl: '',
    }
  },
  created() {
    this.fileList = this.defaultImages
  },
  methods: {
    _handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    getUploadedFiles() {
      return this.$refs.upload.uploadFiles
    },
  },
}
</script>
