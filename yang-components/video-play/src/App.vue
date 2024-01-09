<template>
  <!-- <template v-if="!isShowMultiple && show">
    <video-play-m3u8
      :source="source"
      ref="VueAliplayerV3"
      :options="options"
      :forbidFastForward="forbidFastForward"
    />
    videoPlayM3u8
  </template>
  <div v-if="isShowMultiple && show" class="show-multiple">
    <template v-for="x in 5">
      <video-play-m3u8
        class="multiple-player"
        :source="source"
        ref="VueAliplayerV3"
        :options="options"
      />
    </template>
  </div>
  <p class="remove-text" v-if="!show">播放器已销毁!</p>
  <div class="player-btns">
    <template v-if="!isShowMultiple && show">
      <span @click="play()">播放</span>
      <span @click="pause()">暂停</span>
      <span @click="replay()">重播</span>
      <span @click="getCurrentTime()">播放时刻</span>
      <span @click="getStatus()">获取播放器状态</span>
      <span @click="handlerForbidFastForward()">禁止快进</span>
    </template>
    <span @click="show = !show">{{ show ? "销毁" : "重载" }}</span>
    <span @click="options.isLive = !options.isLive">{{
      options.isLive ? "切换普通模式" : "切换直播模式"
    }}</span>
    <span @click="showMultiple()">{{
      isShowMultiple ? "显示1个播放器" : "显示多个播放器"
    }}</span>
  </div>
  <div class="source-box">
    <span class="source-label">选择播放源(支持动态切换):</span>
    <select v-model="source" name="source" id="source">
      <option value="//player.alicdn.com/video/aliyunmedia.mp4">播放源1</option>
      <option value="//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4">
        播放源2
      </option>
      <option
        value="//tbm-auth.alicdn.com/e7qHgLdugbzzKh2eW0J/kXTgBkjvNXcERYxh2PA@@hd_hq.mp4?auth_key=1584519814-0-0-fc98b2738f331ff015f7bf5c62394888"
      >
        播放源3
      </option>
      <option value="//ivi.bupt.edu.cn/hls/cctv1.m3u8">直播播放源4</option>
    </select>
  </div>
  <div class="source-box">
    <span class="source-label">输入播放源(支持动态切换):</span>
    <input class="source-input" type="text" v-model="source" />
  </div>
  <div class="source-box">
    <span class="source-label">指定为flash:</span>
    <select v-model="options.useFlashPrism">
      <option :value="true">是</option>
      <option :value="false">否</option>
    </select>
  </div>
  <div class="source-box">
    <span class="source-label">禁止用户拖动(仅flash有效):</span>
    <select v-model="options.disableSeek">
      <option :value="true">是</option>
      <option :value="false">否</option>
    </select>
  </div>

  <video-play-flv videoType="mp4" url="https://media.w3.org/2010/05/sintel/trailer.mp4" :option="{
      isLive: true,
      hasVideo: true,
      hasAudio: true,
      stashInitialSize: 128,
     
    }"></video-play-flv> -->
  <video-play-haikan :listData="channelWarnVideoArr"></video-play-haikan>
</template>
<script setup>
// import videoPlayHaikan from "../src/components/video-play-haikan/index.vue";
import { ref, onMounted, reactive } from "vue";
let VueAliplayerV3 = ref(null);
let options = reactive({
  isLive: !true, //切换为直播流的时候必填
});

let source = ref(
  "http://devimages.apple.com/iphone/samples/bipbop/gear1/prog_index.m3u8"
);
let show = ref(true);
let isShowMultiple = ref(false);
let forbidFastForward = ref(false);
let channelWarnVideoArr = reactive([
  {
    realCameraIndexCode: "222",
    realCameraName: "直播视频流",
    url: "rtsp://21.47.38.152:554/openUrl/rbnObsQ",
  },
]);

const play = () => {
  VueAliplayerV3.value.play();
};

const pause = () => {
  VueAliplayerV3.value.pause();
};

const replay = () => {
  VueAliplayerV3.value.replay();
};
const handlerForbidFastForward = () => {
  forbidFastForward.value = true;
};

const getCurrentTime = () => {
  // VueAliplayerV3.value.getCurrentTime();
  source.value = "http://ivi.bupt.edu.cn/hls/cctv1.m3u8";
};

const getStatus = () => {
  const status = VueAliplayerV3.value.getStatus();
  console.log(`getStatus:`, status);
  alert(`getStatus:${status}`);
};

const showMultiple = () => {
  isShowMultiple.value = !isShowMultiple.value;
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.remove-text {
  text-align: center;
  padding: 20px;
  font-size: 24px;
}
.show-multiple {
  display: flex;
  .multiple-player {
    width: calc(100% / 4);
    margin: 20px;
  }
}
.player-btns {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  span {
    margin: 0 auto;
    display: inline-block;
    padding: 5px 10px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #eee;
    background: #e1e1e1;
    border-radius: 10px;
    text-align: center;
    margin: 5px;
    cursor: pointer;
  }
}
.source-box {
  padding: 5px 10px;
  margin-bottom: 10px;
  .source-label {
    margin-right: 20px;
    font-size: 16px;
    display: block;
  }
  #source {
    margin-top: 10px;
  }
  .source-input {
    margin-top: 10px;
    padding: 5px 10px;
    width: 80%;
    border: 1px solid #ccc;
  }
}
</style>
