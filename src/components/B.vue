

<template>
  <van-empty description="描述文字" />
  <div>B Component</div>
  <van-button type="primary" @click="emit">emit</van-button>
  <div>count: {{count}}</div>
  <van-button type="primary" @click="count++">count++</van-button>
</template>

<script setup lang="ts">

onMounted(() => {
  console.log('B Component onMounted');
})


const count = ref(0)
const emit = () => {
  console.log('123');
  
}
</script>

<style>

</style>
