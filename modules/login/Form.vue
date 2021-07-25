<template>
  <card class="col-md-3">
    <div class="d-flex justify-content-center">
      <h4 slot="header" class="dialog-title">Login</h4>
    </div>
    <form @submit.prevent="login">
      <base-input
        v-model="username"
        type="text"
        label="Username"
        placeholder="Username"
        :error="errors.username"
      />
      <base-input
        v-model="password"
        type="password"
        label="Password"
        placeholder="Password"
        :error="errors.username"
      />

      <div class="d-flex justify-content-center">
        <base-button native-type="submit" type="primary" block
          >Login</base-button
        >
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
    }
  },
  methods: {
    login() {
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
