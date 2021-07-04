<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <form @submit.prevent="update">
      <div class="row">
        <div class="col-md-4">
          <base-input
            v-model="fullname"
            type="text"
            label="Fullname"
            placeholder="Fullname"
          />
        </div>
        <div class="col-md-4">
          <base-input
            v-model="nickname"
            type="text"
            label="Nickname"
            placeholder="Nickname"
          />
        </div>
        <div class="col-md-4">
          <base-input
            v-model="role"
            type="text"
            label="Role"
            placeholder="Role"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input label="About Me">
            <textarea
              v-model="aboutMe"
              class="form-control"
              placeholder="About Me"
            />
          </base-input>
        </div>
      </div>

      <base-input
        v-model="fullname"
        type="text"
        placeholder="Email"
        addon-left-icon="fas fa-envelope"
      />

      <base-input
        v-model="fullname"
        type="text"
        placeholder="Instagram"
        addon-left-icon="fab fa-instagram"
      />

      <base-input
        v-model="fullname"
        type="text"
        placeholder="LinkedIn"
        addon-left-icon="fab fa-linkedin"
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
      fullname: '',
      nickname: '',
      aboutMe: '',
      role: '',
    }
  },
  methods: {
    update() {
      alert('Your data: ' + JSON.stringify(this.user))
    },
  },
}
</script>
