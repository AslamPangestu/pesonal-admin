<template>
  <div class="row">
    <div class="col-md-12"><portfolio-form /></div>
  </div>
</template>

<script>
import PortfolioForm from '@/modules/portfolio/Form'
export default {
  name: 'CreatePortfolioPage',
  components: { PortfolioForm },
  layout: 'main',
}
</script>
