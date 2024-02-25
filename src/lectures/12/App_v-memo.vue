<template>
  <div>
    <div v-memo="[subsecribers, likes]">
      <p>
        subsecribers: {{  subsecribers }}
      </p>
      <p>views: {{ views }}</p>
      <P>likes: {{ likes }}</P>
    </div>
    <button @click="subsecribers++">subs++</button>
    <button @click="views++">views++</button>
    <button @click="likes++">likes++</button>
    <div >
      <p>
        subsecribers: {{  subsecribers }}
      </p>
      <p>views: {{ views }}</p>
      <P>likes: {{ likes }}</P>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const subsecribers = ref(4000);
    const views =ref (400);
    const likes = ref(20);


    return {subsecribers, likes, views}
  }
}
</script>

<style lang="scss" scoped>

</style>