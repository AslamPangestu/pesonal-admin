<template>
  <card
    v-loading="loading"
    class="col-md-3"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="d-flex justify-content-center">
      <h4 slot="header" class="title">Login</h4>
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
        <base-button native-type="submit" type="primary" class="btn-fill">
          Login
        </base-button>
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
      loading: false,
    }
  },
  methods: {
    login() {
      alert('Your data: ' + JSON.stringify(this.user))
    },
  },
}
</script>
