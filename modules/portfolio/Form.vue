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
        :error="errors.title"
      />
      <div class="row">
        <div class="col-6">
          <base-input
            v-model="organizer"
            type="text"
            label="Organizer"
            placeholder="Organizer"
            required
            :disabled="titleType === 'Detail'"
            :error="errors.organizer"
          />
        </div>

        <div class="col-6">
          <base-input
            v-model="year"
            type="text"
            label="Year"
            placeholder="Year"
            required
            :disabled="titleType === 'Detail'"
            :error="errors.year"
          />
        </div>
      </div>

      <base-input label="Description" required :error="errors.description">
        <textarea
          v-model="description"
          class="form-control"
          placeholder="Description"
          :disabled="titleType === 'Detail'"
        />
      </base-input>

      <base-file-input
        ref="image"
        label="Image"
        :default-images="images"
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
import { IsEmpty, FormValidate } from '@/util/validation'

export default {
  data() {
    return {
      title: '',
      organizer: '',
      year: '',
      description: '',
      images: [
        {
          name: 'food.jpeg',
          url: 'http://localhost:3000/img/mike.jpg',
        },
        {
          name: 'food2.jpeg',
          url: 'http://localhost:3000/img/mike.jpg',
        },
      ],
      loading: false,
      errors: {
        title: '',
        organizer: '',
        year: '',
        description: '',
      },
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
      this.errors.title = IsEmpty(this.title)
      this.errors.organizer = IsEmpty(this.organizer)
      this.errors.year = IsEmpty(this.year)
      this.errors.description = IsEmpty(this.description)
      if (FormValidate(this.errors)) {
        return
      }
      // const images = this.$refs.image.getUploadedFiles()
      this.$emit('submit')
    },
  },
}
</script>
