
<template>
  <div>A Component {{user.name}}</div>
  <van-button type="primary" @click="emit">emit</van-button>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'

const user = useUserStore()

console.log('user', user);
onMounted(() => {
  console.log('A Component onMounted');
})


const emit = () => {
  user.logout()
  // instance?.proxy?.$Bus.emit('on-haha', 'mitt')
}

</script>


<style>

</style>
