<template>
  <div>
    <p>author: {{ author  }}</p>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from 'vue'
export default {
  setup () {
    const book = reactive({
      author: "Vue Team",
      year: '2020',
      title: 'Vue 3 Guide',
      description: '오브젝트 할당 테스트',
      price: '무료'
    });

    // toRefs를 활용한 구조분해할당 방법
    // toRefs
    // const { author, title } = toRefs(book);

    // toRef
    const author = toRef(book, 'author');
    const title = toRef(book, 'title');

    return { author, title, book }
  }
}
</script>

<style lang="scss" scoped>

</style>