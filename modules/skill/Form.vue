<template>
  <card v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <h5 slot="header" class="title">{{ titleType }} Skill</h5>
    <form @submit.prevent="update">
      <base-input
        v-model="name"
        type="text"
        label="Name"
        placeholder="Name"
        required
        :disabled="titleType === 'Detail'"
      />
      <base-input
        v-model="level"
        type="text"
        label="Level"
        placeholder="Level"
        required
        :disabled="titleType === 'Detail'"
      />

      <div class="d-flex justify-content-end">
        <base-button native-type="submit" type="primary" class="btn-fill">
          Save
        </base-button>
      </div>
    </form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      level: '',
      loading: false,
    }
  },
  computed: {
    titleType() {
      const paths = this.$route.path.split('/')
      const length = paths.length
      if (paths[length - 1] === 'create') {
        return 'Create'
      }
      if (paths[length - 1] === 'edit') {
        return 'Edit'
      }
      return 'Detail'
    },
  },
  mounted() {
    if (this.titleType !== 'Create') {
      this.loading = true
      // TODO: Inquiry
      this.loading = false
    }
  },
  methods: {
    update() {
      this.$emit('submit')
    },
  },
}
</script>
