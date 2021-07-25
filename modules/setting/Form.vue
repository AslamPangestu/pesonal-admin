<template>
  <card v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <h5 slot="header" class="title">Setting</h5>
    <form @submit.prevent="update">
      <base-input
        v-model="username"
        type="text"
        label="Username"
        placeholder="Username"
        :error="errors.username"
        required
      />
      <base-input
        v-model="password"
        type="password"
        label="Password"
        placeholder="Password"
        :error="errors.password"
        required
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
      username: '',
      password: '',
      errors: {
        username: '',
        password: '',
      },
      loading: false,
    }
  },
  mounted() {
    this.loading = true
    // TODO: Inquiry
    this.loading = false
  },
  methods: {
    update() {
      this.errors.username = IsEmpty(this.username)
      this.errors.password = IsEmpty(this.password)
      if (FormValidate(this.errors)) {
        return
      }
      this.$emit('submit')
    },
  },
}
</script>
