<template>
  <card v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <h5 slot="header" class="title">Setting</h5>
    <form @submit.prevent="update">
      <base-input
        v-model="username"
        type="text"
        label="Username"
        placeholder="Username"
        required
      />
      <base-input
        v-model="password"
        type="text"
        label="Password"
        placeholder="Password"
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
export default {
  data() {
    return {
      username: '',
      password: '',
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
      alert('Your data: ' + JSON.stringify(this.user))
    },
  },
}
</script>
