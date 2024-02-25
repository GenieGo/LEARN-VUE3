<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia laudantium, earum, ipsum saepe mollitia ex delectus natus maiores aut culpa? Iure earum rerum ipsum natus facilis quis blanditiis doloribus?
    </div>
    <button @click="fontSize++">fontSize +</button>
    <button @click="fontSize--">fontSize -</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup () {
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '13px'
    // })
    const fontSize = ref(13)
    const styleObject = computed(() => {
      return{
        color: 'red',
        fontSize: fontSize.value + 'px'
      }
    })
    return {
      fontSize,
      styleObject
    }
  }
}
</script>

<style lang="scss" scoped>

</style>