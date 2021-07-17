<template>
  <div class="not-found-page">
    <div class="centered">
      <h1><i class="fas fa-exclamation-circle" /> {{ statusCode }}</h1>
      <p>{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({ message: '', path: '', statusCode: '' }),
    },
  },
  computed: {
    statusCode() {
      return this.error.statusCode
    },
    statusMessage() {
      const MESSAGE = {
        404: 'The page you requested could not be found.',
      }
      return MESSAGE[this.statusCode]
    },
  },
}
</script>
<style lang="scss">
.not-found-page {
  .full-page > .content,
  .centered {
    min-height: calc(100vh - 160px);
  }
  .not-found-icon {
    margin-right: 10px;
  }
  .centered {
    h1,
    i {
      font-size: 50px;
    }
    p {
      font-size: 20px;
    }
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
}
</style>
