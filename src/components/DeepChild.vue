<template>
  <div class="card">
    <div class="card-header">Deep child component</div>
    <div class="card-body">
      <p>staticMessage: {{ staticMessage }}</p>
      <p>message: {{ message }}</p>
      <p>count: {{ count }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup () {
    const staticMessage = inject('static-message');
    const message = inject('message');
    const count = inject('count');

    return { staticMessage, message, count }
  }
}
</script>

<style lang="scss" scoped>

</style>