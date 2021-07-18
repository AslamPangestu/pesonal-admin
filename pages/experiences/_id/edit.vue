<template>
  <div v-loading.fullscreen.lock="loading" class="row">
    <div class="col-md-12"><experience-form @submit="submit" /></div>
  </div>
</template>

<script>
import ExperienceForm from '@/modules/experience/Form'
export default {
  name: 'EditExperiencePage',
  components: { ExperienceForm },
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
