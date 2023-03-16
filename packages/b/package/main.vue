<script lang="ts">
import { computed, defineComponent, ref } from 'vue-demi'
import { iconProps } from './type'
export default defineComponent({
  name: 'TestIcon',
  props: {
    ...iconProps
  },
  setup(props, { emit }) {
    const count = ref(0)
    const addCount = () => {
      count.value++
      emit('add', count.value)
    }
    const newP = computed(() => props.primary)
    return {
      count,
      newP,
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
