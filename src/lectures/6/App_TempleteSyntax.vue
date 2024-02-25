<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <!-- v-once는 1회만 랜더링됨 -->
    <p v-once>{{message}}</p>
    <button @click="message = message + '!!'">
      messageClick
    </button>
    <h2>v-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"/>
    <h2>속성 바인드</h2>
    <hr>
    <div :title="dynamicTitle">
      title test
    </div>
    <h2>{{ message.split('').reverse().join('') }}</h2>
    <input v-bind="inputAttrs">
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const message = ref('Hello Vue3');
    const rawHtml = ref('<strong>Hi strong</strong>');
    const dynamicTitle = ref('hellow title');
    const inputAttrs = ref({
      type: 'text',
      value: '123141',
      disabled: true
    })
    return {
      message,
      rawHtml,
      dynamicTitle,
      inputAttrs
    }
  }
}
</script>

<style lang="scss" scoped>

</style>