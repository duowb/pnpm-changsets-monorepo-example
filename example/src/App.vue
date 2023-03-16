<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <TestIcon primary="qwe" ref="testIcon"></TestIcon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import HelloWorld from './components/HelloWorld.vue';
import { TestIcon } from '@duobo/pkg-b'

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const testIcon = ref<InstanceType<typeof TestIcon>>()
    return {
      testIcon
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
