<template>
  <card v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <h5 slot="header" class="title">{{ titleType }} Experience</h5>
    <form @submit.prevent="submit">
      <base-input
        v-model="title"
        type="text"
        label="Title"
        placeholder="Title"
        required
        :disabled="titleType === 'Detail'"
        :error="errors.year"
      />
      <base-input
        v-model="year"
        type="text"
        label="Year"
        placeholder="Year"
        required
        :disabled="titleType === 'Detail'"
        :error="errors.title"
      />

      <base-input label="Description" required>
        <textarea
          v-model="description"
          class="form-control"
          placeholder="Description"
          :disabled="titleType === 'Detail'"
          :error="errors.description"
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
import { IsEmpty, FormValidate } from '@/util/validation'

export default {
  data() {
    return {
      year: '',
      title: '',
      description: '',
      errors: {
        year: '',
        title: '',
        description: '',
      },
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
    submit() {
      this.errors.year = IsEmpty(this.year)
      this.errors.title = IsEmpty(this.title)
      this.errors.description = IsEmpty(this.description)
      if (FormValidate(this.errors)) {
        return
      }
      this.$emit('submit')
    },
  },
}
</script>
