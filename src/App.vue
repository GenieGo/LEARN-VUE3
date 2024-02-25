<template>
  <div style="width: 100%;">
    <TheNav></TheNav>
    <TheView></TheView>

  </div>
</template>

<script>
// 지역등록
import TheNav from '@/components/TheNav.vue';
import TheView from '@/components/TheView.vue';

export default {
  components: {
    TheNav,
    TheView
  },  
  setup () {
    

    return {}
  }
}
</script>

<style>
#app{
  width: 100%;
}
</style>