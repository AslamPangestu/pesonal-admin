<template>
  <div v-loading.fullscreen.lock="loading" class="row">
    <div class="col-md-12"><skill-form @submit="submit" /></div>
  </div>
</template>
<script>
import SkillForm from '@/modules/skill/Form'
export default {
  name: 'EditExperiencePage',
  components: { SkillForm },
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
