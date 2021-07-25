<template>
  <card class="card-user">
    <form @submit.prevent="submit">
      <div class="author">
        <div class="block block-one"></div>
        <div class="block block-two"></div>
        <div class="block block-three"></div>
        <div class="block block-four"></div>
        <div class="cursor-pointer" @click="$refs.file.click()">
          <img class="avatar" :src="imageUrl" alt="..." />

          <input
            id="file"
            ref="file"
            type="file"
            name="file"
            style="display: none"
            accept="image/*"
            @change="onFileChange"
          />
        </div>
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
  props: {
    defaultImage: { type: String, default: '' },
  },
  data() {
    return {
      imageUrl: 'img/emilyz.jpg',
    }
  },
  mounted() {
    if (this.defaultImage !== '') {
      this.imageUrl = this.defaultImage
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.imageUrl = URL.createObjectURL(file)
      this.$emit('selected', file)
    },
  },
}
</script>
