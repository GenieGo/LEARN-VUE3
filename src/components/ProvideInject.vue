<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProvideInject component</div>
      <div class="card-body">ProviedInject body</div>
    </div>
    <Child></Child>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
import { provide, ref } from 'vue'

export default {
  components: {
    Child
  },
  setup() {
    const staticeMessage = 'static message'
    const message = ref('message')
    const count = ref(10)
    provide('static-message', staticeMessage)
    provide('message', message)
    provide('count', count)
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
