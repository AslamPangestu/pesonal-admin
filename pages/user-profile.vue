<template>
  <div class="row">
    <div class="col-md-4"><upload-avatar /></div>
    <div class="col-md-8"><edit-form /></div>
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
}
</script>
