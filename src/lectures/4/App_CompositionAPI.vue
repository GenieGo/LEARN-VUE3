<template>
  <div>
    <h2>반응형</h2>
    <div>{{ reactiveMessage }}</div>
    <button @click="addReactiveMessgae">
      Add Messgae
    </button>
    <br>
    <h2>nomal</h2>
    <div>
      {{ nomalMessgae }}
    </div>
    <button @click="addNomalMessage">
      AddNoamlMessgae
    </button>
  </div>
</template>

<script>
import { ref, isRef, onMounted, onBeforeMount } from 'vue';
export default {
  setup () {
    const reactiveMessage = ref('Hello Reaive Messge');
    let nomalMessgae = 'Nomal Messge';
    const addReactiveMessgae = () => {
      reactiveMessage.value = reactiveMessage.value + ' Add ';
    }
    // console.log('isRef', isRef(reactiveMessage));
    const addNomalMessage = () => {
      nomalMessgae = nomalMessgae + '!!';
    }

    onMounted(()=> {
      console.log('onMounted');
    })
    onBeforeMount(() => {
      console.log('onBeforeMounted');
    })

    return {
      reactiveMessage,
      nomalMessgae,
      addReactiveMessgae,
      addNomalMessage
    }
  }
}
</script>

<style lang="scss" scoped>

</style>