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
      />
      <base-input
        v-model="password"
        type="text"
        label="Password"
        placeholder="Password"
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
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$emit('submit')
    },
  },
}
</script>
