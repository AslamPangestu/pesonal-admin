<template>
  <div v-loading.fullscreen.lock="loading" class="row">
    <div class="col-md-4"><upload-avatar @submit="updateAvatar" /></div>
    <div class="col-md-8"><edit-form @submit="updateProfile" /></div>
  </div>
</template>

<script>
import EditForm from '@/modules/userProfile/EditForm'
import UploadAvatar from '@/modules/userProfile/UploadAvatar'

export default {
  name: 'UserProfilePage',
  components: {
    EditForm,
    UploadAvatar,
  },
  layout: 'main',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    updateAvatar() {
      this.loading = true
      // TODO: Submit
      this.loading = false
    },
    updateProfile() {
      this.loading = true
      // TODO: Submit
      this.loading = false
    },
  },
}
</script>
