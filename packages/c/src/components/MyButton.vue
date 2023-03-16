<script lang="ts">
import { defineComponent, ref } from 'vue-demi'
export default defineComponent({
  name:'MyButton',
  props: {
    primary: { type: String }
  },
  setup(){
    const count  = ref(0)
    const addCount = () => count.value++
    return {
      count,
      addCount
    }
  }
})
</script>
<template>
	<button class="btn" @click="addCount">
		{{ primary }}--{{ count }}
	</button>
</template>
