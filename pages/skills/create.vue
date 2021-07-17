<template>
  <div class="row">
    <div class="col-md-12"><skill-form /></div>
  </div>
</template>
<script>
import SkillForm from '@/modules/skill/Form'
export default {
  name: 'CreateSkillPage',
  components: { SkillForm },
  layout: 'main',
}
</script>
