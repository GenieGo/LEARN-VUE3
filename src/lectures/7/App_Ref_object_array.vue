<template>
  <div>

  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup () {
    // ref -> Object
    const count = ref(0);
    const state = reactive({
      count
    })

    console.log('state.coutn', state.count);

    // ref => array
    const message = ref('Hello');
    const arr = reactive([message]);
    console.log('arr[0] => ',arr[0].value);
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>