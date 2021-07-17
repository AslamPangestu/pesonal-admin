<template>
  <div
    class="
      d-flex
      flex-column
      min-vh-100
      justify-content-center
      align-items-center
    "
  >
    <login-form />
  </div>
</template>

<script>
import LoginForm from '@/modules/login/Form'
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
}
</script>
