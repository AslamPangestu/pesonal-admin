<template>
  <div class="row">
    <div class="col-md-12"><setting-form /></div>
  </div>
</template>

<script>
import SettingForm from '@/modules/setting/Form'
export default {
  name: 'SettingPage',
  components: { SettingForm },
  layout: 'main',
}
</script>
