<template>
  <div class="UnifiedMonitoringVideo">
    <div id="videoWindow"></div>
  </div>
</template>
<script>
export default {
  name: "videoPlayHaikan",
};
</script>
<script setup>
import {
  ref,
  reactive,
  onMounted,
  defineProps,
  onUnmounted,
  defineEmits,
} from "vue";
let scriptSrc = [
  `jquery-1.12.4.min.js`,
  "jsWebControl-1.0.0.min.js",
  "jsencrypt.min.js",
  "initPlugin.js",
];
let emit = defineEmits([]);
let props = defineProps({
  cameraIndexCode: {
    type: String,
    default: "default",
  },
  cameraName: {
    type: String,
    default: "default",
  },
  url: {
    type: Object,
    default: "",
  },
  listData: {
    type: Array,
    default: () => [],
  },
});
let initVideo = ref(null);
let videoCallCode = ref(0);
onMounted(() => {
  init();
  window.unifiedMonitoringVideoCall = (msg) => videoCall(msg);
});
onUnmounted(() => {
  destroyPreview();
});

const init = () => {
  // scriptSrc.forEach
  let scriptTag = null;
  const html = document.getElementsByTagName("html");
  for (let index = 0; index < scriptSrc.length; index++) {
    const scriptID = scriptSrc[index];
     scriptTag = document.getElementById(scriptID);
    if (!scriptTag) {
      // console.log('scriptTag');
      scriptTag = document.createElement("script");
      scriptTag.type = "text/javascript";
      scriptTag.id = scriptID;
      scriptTag.src = `../../src/utils/haikan/${scriptID}`;
      html[0].appendChild(scriptTag);
    }
  }

  //兼容单页加载和硬加载
  scriptTag.addEventListener("load", () => {
    initPlayer();
  });
};
const initPlayer = () => {
  let layout = "1x1";
  layout = ["1x1", "1x2", "1+2", "2x2", "1+5", "1+5", "1+7", "1+7", "3x3"][
    props.listData.length - 1
  ];

  initVideo.value = new initPlugin(
    {
      el: "#videoWindow",
      playMode: 0,
      layout,
    },
    () => {}
  );

  setTimeout(() => {
    startPreview();
  }, 5000); // time
};
const videoCall = (msg) => {
  msg.includes("768") && (videoCallCode.value = 768); // 开始播放
  msg.includes("769") && (videoCallCode.value = 769); // 播放失败
  msg.includes("770") && (videoCallCode.value = 770); // 播放异常
  msg.includes("816") && (videoCallCode.value = 816); // 播放结束

  // callback : false 立马播放下一个视频
  emit("callback", ![769, 770].includes(videoCallCode.value));
};
const startPreview = () => {
  let DataArr = [];
  // 多个视频
  if (props.listData.length > 0) {
    console.log("多个视频")
    props.listData.forEach(
      ({ realCameraIndexCode, realCameraName, url }, index) =>{
        console.log("--------",realCameraIndexCode, realCameraName, url)
        DataArr.push({
          cameraIndexCode: realCameraIndexCode || "32120280441310003431",
          cameraName: realCameraName || "直播视频流",
          // url: 'rtmp://10.10.0.36:10935/hls/stream_1',
          url: url || "rtsp://21.47.38.152:554/openUrl/scbhPzi",
          deviceType: 1,
          streamMode: 0,
          smallEagleEyeAbility: 0,
          gpuMode: 0,
          wndId: index + 1,
        })
      }
     
    );
  }

  if (videoCallCode.value !== 816 && DataArr.length > 0) {
    // this.initVideo.listCopy && this.initVideo.stopPreview('all')
    setTimeout(() => {
      initVideo.value.startPreview(DataArr);
    }, 200);
  }
};
const destroyPreview = () => {
  //先隐藏
  //this.initVideo.oWebControl.JS_HideWnd()
  //反初始化
  initVideo.value.oWebControl.JS_RequestInterface({
    funcName: "uninit",
  });
  //销毁
  initVideo.value.oWebControl.JS_DestroyWnd();
};
</script>
<style lang="less" scoped>
.UnifiedMonitoringVideo {
  width: 600px;
  height: 400px;
  #videoWindow {
    background: #262626;
    width: 100%;
    height: 100%;
  }
}
</style>
