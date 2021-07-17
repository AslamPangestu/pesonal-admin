<template>
  <card v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <h5 slot="header" class="title">{{ titleType }} Portfolio</h5>
    <form @submit.prevent="update">
      <base-input
        v-model="title"
        type="text"
        label="Title"
        placeholder="Title"
        required
        :disabled="titleType === 'Detail'"
      />
      <base-input
        v-model="year"
        type="text"
        label="Year"
        placeholder="Year"
        required
        :disabled="titleType === 'Detail'"
      />

      <base-input label="Description" required>
        <textarea
          v-model="description"
          class="form-control"
          placeholder="Description"
          :disabled="titleType === 'Detail'"
        />
      </base-input>

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
      year: '',
      title: '',
      description: '',
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
    if (this.titleType === 'Detail') {
      this.loading = true
      // TODO: Inquiry
      this.loading = false
    }
  },
  methods: {
    update() {
      alert('Your data: ' + JSON.stringify(this.user))
    },
  },
}
</script>
