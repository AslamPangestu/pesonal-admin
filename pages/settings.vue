<template>
  <div v-loading.fullscreen.lock="loading" class="row">
    <div class="col-md-12"><setting-form @submit="submit" /></div>
  </div>
</template>

<script>
import SettingForm from '@/modules/setting/Form'
export default {
  name: 'SettingPage',
  components: { SettingForm },
  layout: 'main',
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
