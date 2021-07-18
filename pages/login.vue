<template>
  <div
    v-loading.fullscreen.lock="loading"
    class="
      d-flex
      flex-column
      min-vh-100
      justify-content-center
      align-items-center
    "
  >
    <login-form @submit="submit" />
  </div>
</template>

<script>
import LoginForm from '@/modules/login/Form'
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    submit() {
      this.loading = true
      // TODO: Submit
      this.loading = false
    },
  },
}
</script>
