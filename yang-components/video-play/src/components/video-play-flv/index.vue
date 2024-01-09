<script>
export default {
  name: 'videoPlayFlv',
}
</script>
<script setup >
/**
 * 接收传过来的值
 *
 * @param videoType 定义按钮的大小 可选值为 'hlv' | 'mp4' | '' | ''
 * @param url 定义视频源
 */
let props = defineProps({
  videoType: {
    type: String,
    default: "default",
  },
  url: {
    type: String,
    default: "default",
  },
  option: {
    type: Object,
    default: () => {
      return {
        isLive: "true", //是否是直播流，默认 true
        hasVideo: "", //指示流是否有视频
        hasAudio: false, // 是否有音频
        stashInitialSize: 128, // 减少首帧显示等待时长
        headers: {
          // 设置请求头
        },
      };
    },
  },
});
import flvjs from "flv.js";
import {
  onMounted,
  reactive,
  onUnmounted,
  ref,
  watch,
  defineExpose,
} from "vue";
let videoElement = ref(null);
const state = reactive({
  loading: true, // 加载动画
  flvPlayer: null,
  delayTimer: null,
  maxReconnectCount: Window.reconnectFlvCount, // 重连的最大次数
  errorCount: 0, // 错误次数，连接10次则不再连接
  lastDecodedFrame: 0, // 用于判断卡顿
  endedReloadFlag: true, // 用于判断推流结束，是否要再次构建（情景：后端关闭推流后重新打开，有几秒的断流时间）
  isFlullscreen: false,
});
watch(
  () => props.url,
  (newValue, oldValue) => {
    console.log('----',oldValue);
    flv_load_mds();
  },{
    deep:true
  }
);
function flv_load_mds() {
  const element = videoElement.value;
  if (flvjs.isSupported() && element) {
    var mediaDataSource = {
      type: props.videoType,
      url: props.url, // 视频流地址
      ...props.option,
    };
    state.flvPlayer = flvjs.createPlayer(mediaDataSource, {
      enableWorker: false,
      lazyLoadMaxDuration: 3 * 60,
      seekType: "range",
      headers: props.option.headers,
    });
    state.flvPlayer.attachMediaElement(element);
    state.flvPlayer.load();
  }
}

function flvDestory() {
  state.flvPlayer.pause();
  state.flvPlayer.unload();
  state.flvPlayer.detachMediaElement();
  state.flvPlayer.destroy();
  state.flvPlayer = null;
}

onMounted(() => {
console.log("视频流地址",props.url)
flv_load_mds();
document.body.addEventListener('mousedown', function(){
	videoElement.muted = false;
}, false);
//   unmuteButton.addEventListener("click", function () {
//     videoElement.muted = false;
//     flv_load_mds();
//   });
});
onUnmounted(() => {
  flvDestory();
});
</script>

<template>
  <div class="video-container">
    <video
      name="videoElement"
      class="centeredVideo"
      controls
      autoplay
      muted
      id="videoElement"
      ref="videoElement"
    >
      Your browser is too old which doesn't support HTML5 video.
    </video>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
    margin-top: 8px;
} 
.video-container video {
    width: 100%;
    height: 100%;
}
</style>
