
<template>
  <!-- <HelloWorld /> -->
  <A />
  <B />
  <renderDom />
</template>

<script setup lang="ts">
import renderDom from "./App";

const instance = getCurrentInstance()

console.log('instance', instance?.proxy?.$Bus);

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
