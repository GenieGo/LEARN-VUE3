<template>
  <div>
    <ul>
      <template v-for="(item, index) in items" :key="index">
        <li> 
          {{ item.message }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const items = reactive([
      {id: 1, message: 'Java'},
      {id: 2, message: 'html'},
      {id: 3, message: 'css'},
      {id: 4, message: 'javascript'}   
    ])

    return {items}
  }
}
</script>

<style lang="scss" scoped>

</style>