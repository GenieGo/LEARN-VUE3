<template>
  <div>
    <p>
      {{ counter }}
    </p>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const message = ref('Hello vue3')
    return {
      counter,
      message
    }
  }
}
</script>

<style lang="scss" scoped></style>
