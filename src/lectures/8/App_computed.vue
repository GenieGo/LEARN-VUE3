<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h2>lectures</h2>
    <p>{{hasLecture}}</p>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup () {
    const teacher = reactive({
      name: 'genie',
      lectures: ['html/css', 'javascript', 'vue3']
    })
    // computed는 해당 데이터가 변경전까지는 데이터를 저장하고 있어서 중복되어 실행되지 않음 
    // 그렇기에 methods에 비해 효율적으로 사용가능하다.
    const hasLecture = computed(() => {
      return teacher.lectures.length > 0 ? 'ok' : 'no'
    })

    const firstName = ref('고');
    const lastName = ref('길동');
    
    const fullName = computed({
      get(){
        return firstName.value + ' ' + lastName.value;
      },
      set(value){
        console.log('value=>', value);
        console.log(value.split(' '));
        [firstName.value, lastName.value] = value.split(' ');
      }
    });
    console.log('console=>', fullName.value)
    fullName.value = '홍 길동';
    return {
      teacher,
      hasLecture,
      fullName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>