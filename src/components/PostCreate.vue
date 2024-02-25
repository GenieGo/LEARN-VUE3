<template>
  <div class="row g-3">
    <div class="col col-2">
      <select class="form-select" aria-label="Default select example">
        <option value="news">news</option>
        <option value="notice">notice</option>
      </select>
    </div>
    <div class="col col-8">
      <input type="text" class="form-control" v-model="title">
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">button</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: {
    createPost: (newPost) => {
      if(!newPost.type || !newPost.title) {
        return false
      } 
      return true;
    }
  },
  setup (props, { emit }) {
    const type = ref('news');
    const title = ref('');
    const createPost = () => {
      const newPost = {
        type: type.value,
        title: title.value
      }
      emit('createPost', newPost)
    }

    return {title, createPost, type}
  }
}
</script>

<style lang="scss" scoped>

</style>