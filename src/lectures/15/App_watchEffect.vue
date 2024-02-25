<template>
  <div>
    <form action="" @submit.prevent="save(title, contents)">
      <input v-model.lazy="title" type="text">
      <textarea v-model.lazy="contents" ></textarea>
      <hr>
      <button >저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup () {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`저장: title: ${title} / ${contents}`);
    }

    watchEffect(() => {
      console.log('watchEffect');
      console.log(title.value);
      console.log(contents.value);
    })
    return { title, contents, save }
  }
}
</script>

<style lang="scss" scoped>

</style>