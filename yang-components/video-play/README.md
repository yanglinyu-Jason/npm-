# Vue 3 + Vite

npm 发包流程
npm run build
npm init -y  
npm version 'xxxxxxxxx'
npm login
npm publish
"private": false, 
"keywords": ["linyu","linyu-ui","LINYU","Linyu"],

```
视频组件使用
main.js
    npm install linyu
    import "../node_modules/linyu/style.css"; //引入组件样式
    import LINYU from "linyu"; //引入下载后的组件
    app.use(LINYU); //注册
页面使用
 flv  videoType: flv或mp4
 <video-play-flv videoType="mp4" url="https://media.w3.org/2010/05/sintel/trailer.mp4" :option="{
      isLive: true,
      hasVideo: true,
      hasAudio: true,
      stashInitialSize: 128,
     
}"></video-play-flv>
 flv  videoType: flv或mp4
<video-play-m3u8
    :source="source"
    ref="VueAliplayerV3"
    :options="options"
    :forbidFastForward="forbidFastForward"
    />

flv2: option:{
    url: item.url,
    type: 'flv',
    isLive: true,
    hasAudio: false,
    cors: true,
    elementId: `video-contianer-1`,
}
    <video-play-flv2
      :option="{
        url: item.url,
        type: 'flv',
        isLive: true,
        hasAudio: false,
        cors: true,
        elementId: `video-contianer-${index}`,
      }"
    >
    </video-play-flv2>












```



