<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">{{ type === 'news' ? '뉴스' : '공지사항' }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아</a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    type: {
      type: String,
      default: 'news'
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    isLike: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggleLike'],
  setup(props, context) {
    console.log('props.title', props.title)
    const { emit } = context
    const isLikeClass = computed(() => (props.isLike ? 'btn-danger' : 'btn-outline-danger'))
    const toggleLike = () => {
      // ctx.emit('toggleLike');
      emit('toggleLike')
    }

    return { isLikeClass, toggleLike }
  }
}
</script>

<style lang="scss" scoped></style>
