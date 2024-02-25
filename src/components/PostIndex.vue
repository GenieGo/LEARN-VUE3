<template>
  <div>
    <main>
      <div class="container py-4">
        <PostCreate @create-post="createPost"></PostCreate>
        <div class="row g-3">
          <div class="col col-4">
            <PostItem
              v-for="(item, index) in posts"
              :key="index"
              :title="item.title"
              :content="item.contents"
              :is-like="item.isLike"
              @toggle-like="item.isLike = !item.isLike"
            />
          </div>
        </div>
        <hr class="my-4" />
        <LabelInput :label="'이름'" v-model="userName" class="non-class"></LabelInput>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import PostCreate from '@/components/PostCreate.vue'
import LabelInput from '@/components/LabelInput.vue'
export default {
  components: {
    PostCreate,
    LabelInput
  },
  setup() {
    const posts = reactive([
      { title: '제목1', contents: 'contents1', isLike: true, type: 'notice' },
      { title: '제목2', contents: 'contents2', isLike: false },
      { title: '제목3', contents: 'contents3', isLike: false },
      { title: '제목4', contents: 'contents4', isLike: true },
      { title: '제목5', contents: 'contents5', isLike: true },
      { title: '제목6', contents: 'contents6', isLike: true }
    ])
    const createPost = (newPost) => {
      console.log('create-post', newPost)
      posts.push(newPost)
    }
    const userName = ref('')
    const firstname = ref('')
    const lastname = ref('')

    return { posts, createPost, userName, firstname, lastname }
  }
}
</script>

<style lang="scss" scoped></style>
