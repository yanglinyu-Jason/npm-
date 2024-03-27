<script>
export default {
  name: "videoPlayFlv2",
};
</script>
<script  setup>
import mpegts from "mpegts.js";
import { ref, onUnmounted, onMounted ,watch} from "vue";
const flvPlayer = ref();
const videoMap = new Map();
let props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
      };
    },
  },
});
watch(
  () => props.option,
  (newValue, oldValue) => {
    initFlv(newValue)
  },{
    deep:true
  }
);

const initFlv = (ops) => {
  if (mpegts.isSupported()) {
    const ele =  document.getElementById(ops.elementId);;
    var mediaDataSource = {
      ...ops,
    };
    flvPlayer.value = mpegts.createPlayer(mediaDataSource, {
      enableWorker: false, //启用分离的线程进行转换（如果不想看到控制台频繁报错把它设置为false，官方的回答是这个属性还不稳定，所以要测试实时视频流的话设置为true控制台经常报错）
      enableStashBuffer: false, //关闭IO隐藏缓冲区（如果需要最小延迟，则设置为false，此项设置针对直播视频流）
      stashInitialSize: 128, //减少首帧等待时长（针对实时视频流）
      lazyLoad: false, //关闭懒加载模式（针对实时视频流）
      lazyLoadMaxDuration: 0.2, //懒加载的最大时长。单位：秒。建议针对直播：调整为200毫秒
      deferLoadAfterSourceOpen: false, //在MediaSource sourceopen事件触发后加载。在Chrome上，在后台打开的标签页可能不会触发sourceopen事件，除非切换到该标签页。
      liveBufferLatencyChasing: true, //追踪内部缓冲区导致的实时流延迟
      liveBufferLatencyMaxLatency: 1.5, //HTMLMediaElement 中可接受的最大缓冲区延迟（以秒为单位）之前使用flv.js发现延时严重，还有延时累加的问题，而mpegts.js对此做了优化，不需要我们自己设置快进追帧了
      liveBufferLatencyMinRemain: 0.3, //HTMLMediaElement 中可接受的最小缓冲区延迟（以秒为单位）
      headers:ops.headers,
    });
    flvPlayer.value.attachMediaElement(ele);
    flvPlayer.value.load();
    flvEvent();
  }
};
const flvEvent = () => {
  // 视频错误信息回调
  flvPlayer.value.on(
    mpegts.Events.ERROR,
    (errorType, errorDetail, errorInfo) => {
      console.log(
        "类型:" + JSON.stringify(errorType),
        "报错内容" + errorDetail,
        "报错信息" + errorInfo
      );
    }
  );
  //【重要事件监听】http 请求建立好后，该事件会一直监听 mpegts 实例
  flvPlayer.value.on(mpegts.Events.STATISTICS_INFO, () => {
    const end = flvPlayer.value.buffered.end(0); //获取当前buffered值（缓冲区末尾）
    const differTime = end - flvPlayer.value.currentTime; //获取bufferend与当前播放位置的差值
    console.log("差值为：" + differTime);
  });
};

const destory = () => {
  if (videoMap.size > 0) {
    for (let [key, flv] of videoMap) {
      flv.pause;
      flv.unload();
      flv.detachMediaElement();
      flv.destroy();
      flv = null;
      videoMap.delete(key);
      console.log("销毁掉视频：" + key);
    }
  } else {
    console.log("没有要销毁的视频");
  }
};

/**
 * 播放
 */
const start = () => flvPlayer.value.play();
/**
 * 暂停
 */
const pause = () => flvPlayer.value.pause();

onMounted(() => {
  initFlv(props.option);
});
onUnmounted(() => {
  destory();
});
defineExpose({
  start,
  pause,
  destory

})
</script>

<template>
  <div class="video-container">
    <video
      class="centeredVideo"
      controls="false"
      autoplay="true"
      muted="false"
      :id="option.elementId"
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
