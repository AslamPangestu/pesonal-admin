<template>
  <div class="row">
    <div class="col-md-12"><experience-form /></div>
  </div>
</template>

<script>
import ExperienceForm from '@/modules/experience/Form'
export default {
  name: 'DetailExperiencePage',
  components: { ExperienceForm },
  layout: 'main',
}
</script>
