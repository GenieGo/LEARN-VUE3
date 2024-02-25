import { ref } from 'vue';

export default (await import('vue')).defineComponent({
props: {
title: 'asdfasdf'
},
setup() {
const counter = ref(0);
const message = ref('Hello vue3');
return {
counter, message
};
}
});
