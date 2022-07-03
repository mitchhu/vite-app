<script lang="ts">
import { request } from '../utils/request'
export default {
  data() {

    return {
      list: [] as any[]
    }
  },

  mounted() {
    // request({
    //   url: 'node_social.getArtPageHomeV4',
    // }).then(res => {
    //   console.log('res', res);
    //   if(res.status === 200) {
    //     const result = res?.data?.content[0]
    //     this.list = result.list[0].configInfo.entity.homeButtonInfoList
    //   }
    // })
  },
}


</script>

<template>
  <van-grid>
    <van-grid-item v-for="item in list" icon="photo-o" :text="item.title" />
  </van-grid>

  <p>
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <van-button type="primary" @click="count++">count is: {{ count }}</van-button>
</template>

<style scoped>

</style>
