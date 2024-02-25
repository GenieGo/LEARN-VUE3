<template>
  <div>

  </div>
</template>

<script>
import { reactive, readonly } from 'vue'
export default {
  setup () {
    const original = reactive({
      count: 0,
    });
    const copy = readonly(original);
  
    original.count++;
    copy.count++;
    console.log(original.count);
    console.log('copy', copy.count); // readonly는 읽기만 가능하기에 원본 변경 불가

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>