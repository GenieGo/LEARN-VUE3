<template>
  <div class="card">
    <div class="card-header">child component</div>
    <div class="card-body">

      <DeepChild></DeepChild>
    </div>
  </div>
</template>

<script>
import DeepChild from '@/components/DeepChild.vue'
export default {
  components: {
    DeepChild
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>