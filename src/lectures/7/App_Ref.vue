<template>
  <div>
    <p>{{ message }}</p>
    <button @click="addMessage">add Click</button>
  </div>
</template>

<script>
import {  ref } from 'vue'
export default {
  setup () {
    // reactive === 객체타입만 반응형
    // ref === 기본타입(number, string, boolean)을 반응형
  //   let message = reactive({
  //   value: 'Hello Vue!'
  // })
  //   const addMessage = () => {
  //     message.value = message.value + '!'
  //   }
  //   console.log('message.value', message.value);
  //   console.log('message.value type =>', typeof message.value)
  let message = ref('Hello Vue');
  const addMessage = () => {
    message.value = message.value + '!';
  }
    return { 
      message,
      addMessage
    }
  }
}
</script>

<style lang="scss" scoped>

</style>