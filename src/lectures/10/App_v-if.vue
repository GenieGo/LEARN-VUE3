<template>
  <div>
    <h2 v-if="visible">
      Hello Vue3
    </h2>
    <h2 v-else>v-else</h2>
    <button @click="visible = !visible">
      toggle
    </button>
    <h2 v-if="type === 'A'">A</h2> 
    <h2 v-else-if="type === 'B'">B</h2> 
    <h2 v-else-if="type === 'C'">C</h2> 
    <h2 v-else-if="type === 'D'">D</h2> 
    <button @click="type = 'A'">A</button>
    <button @click="type = 'B'">B</button>
    <button @click="type = 'C'">C</button>
    <button @click="type = 'D'">D</button>
    
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const visible = ref(true);
    const type = ref('A');
    return {
      visible,
      type
    }
  }
}
</script>

<style lang="scss" scoped>

</style>