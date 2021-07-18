<template>
  <div v-loading.fullscreen.lock="loading" class="row">
    <div class="col-md-12"><portfolio-form @submit="submit" /></div>
  </div>
</template>

<script>
import PortfolioForm from '@/modules/portfolio/Form'
export default {
  name: 'CreatePortfolioPage',
  components: { PortfolioForm },
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
