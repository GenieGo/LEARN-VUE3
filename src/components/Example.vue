<template>
  <main>
    <div class="container py-4">
      <MyButton></MyButton>
      <hr />
      <FancyButton #="{ fancyMessage }">
        <div>asdfasdf</div>
        <div>{{ fancyMessage }}</div>
      </FancyButton>
      <hr />
      <AppCard>
        <!-- <template #default="slotObj">
          {{ slotObj.slotMessage }}
        </template> -->
        <!-- 구조분해 할당으로 props 데이터 가져오기 가능 -->
        <template #default="{ slotMessage }">
          {{ slotMessage }}
        </template>
      </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from '@/components/MyButton.vue'
import FancyButton from './FancyButton.vue'
import AppCard from './AppCard.vue'
import { ref } from 'vue'

export default {
  components: {
    MyButton,
    FancyButton,
    AppCard
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
