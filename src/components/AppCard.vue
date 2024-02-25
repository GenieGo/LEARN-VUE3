<template>
  <div>
    <div class="card">
      <div v-if="$slots.header" class="card-header">
        <slot name="header">#header</slot>
      </div>
      <div v-if="$slots.default" class="card-body">
        <slot :slot-message="slotMessage">#default</slot>
      </div>
      <div v-if="hasFooterr" class="card-footer text-muted">
        <slot name="footer">#footer</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup(props, { slots }) {
    const sayHello = () => {
      alert('hello')
    }
    const slotArg = ref('header')
    const message = ref('hello meesage')
    const slotMessage = ref('slotMessage test')
    const hasFooter = computed(() => !!slots.footer)
    return { sayHello, slotArg, message, slotMessage, hasFooter }
  }
}
</script>

<style lang="scss" scoped></style>
