<script setup>
import { ref, onMounted } from "vue";
import VideoPlayFlv from "./components/video-play-flv/index.vue";
import VideoPlayM3u8 from './components/video-play-m3u8/index.vue'
let videoPlayRef = ref('https://media.w3.org/2010/05/sintel/trailer.mp4');

let source =  ref('https://media.w3.org/2010/05/sintel/trailer.mp4');






onMounted(()=>{

})
</script>

<template>

  <!-- <video-play-flv
    :url="videoPlayRef"
    videoType="mp4"
    :option="{
      isLive: true,
      hasVideo: true,
      hasAudio: true,
      stashInitialSize: 128,
     
    }"
  >
  </video-play-flv> -->
  <video-play-m3u8 :source="source" ref="VueAliplayerV2" :options="options"
            :forbidFastForward="forbidFastForward"></video-play-m3u8>
</template>

<style scoped>

</style>
