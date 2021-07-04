<template>
  <card class="card-user">
    <form @submit.prevent="upload">
      <div class="author">
        <div class="block block-one"></div>
        <div class="block block-two"></div>
        <div class="block block-three"></div>
        <div class="block block-four"></div>
        <a href="javascript:void(0)">
          <img class="avatar" src="img/emilyz.jpg" alt="..." />
        </a>
      </div>

      <div slot="footer" class="button-container">
        <base-button native-type="submit" type="primary" class="btn-fill">
          Upload Avatar
        </base-button>
      </div>
    </form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      fullname: '',
      nickname: '',
      aboutMe: '',
      role: '',
    }
  },
  methods: {
    upload() {
      alert('Your data: ' + JSON.stringify(this.user))
    },
  },
}
</script>
