<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <form @submit.prevent="submit">
      <div class="row">
        <div class="col-md-4">
          <base-input
            v-model="fullname"
            type="text"
            label="Fullname"
            placeholder="Fullname"
            required
            :error="errors.fullname"
          />
        </div>
        <div class="col-md-4">
          <base-input
            v-model="nickname"
            type="text"
            label="Nickname"
            placeholder="Nickname"
            required
            :error="errors.nickname"
          />
        </div>
        <div class="col-md-4">
          <base-input
            v-model="role"
            type="text"
            label="Role"
            placeholder="Role"
            required
            :error="errors.aboutMe"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input label="About Me" :error="errors.role" required>
            <textarea
              v-model="aboutMe"
              class="form-control"
              placeholder="About Me"
            />
          </base-input>
        </div>
      </div>

      <base-input
        v-model="email"
        type="text"
        placeholder="Email"
        addon-left-icon="fas fa-envelope"
      />

      <base-input
        v-model="instagram"
        type="text"
        placeholder="Instagram"
        addon-left-icon="fab fa-instagram"
      />

      <base-input
        v-model="linkedin"
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
import { IsEmpty, FormValidate } from '@/util/validation'

export default {
  data() {
    return {
      // FORM
      fullname: '',
      nickname: '',
      aboutMe: '',
      role: '',
      // SOSMED
      email: '',
      instagram: '',
      linkedin: '',
      errors: {
        fullname: '',
        nickname: '',
        aboutMe: '',
        role: '',
      },
    }
  },
  methods: {
    submit() {
      this.errors.fullname = IsEmpty(this.fullname)
      this.errors.nickname = IsEmpty(this.nickname)
      this.errors.aboutMe = IsEmpty(this.aboutMe)
      this.errors.role = IsEmpty(this.role)
      if (FormValidate(this.errors)) {
        return
      }
      this.$emit('submit')
    },
  },
}
</script>
