import videoPlayFlv from './video-play-flv/index.vue'
import videoPlayM3u8 from './video-play-m3u8/index.vue'
import videoPlayHaikan from './video-play-haikan/index.vue'
export { videoPlayFlv,videoPlayM3u8,videoPlayHaikan }
const component = [videoPlayFlv,videoPlayM3u8,videoPlayHaikan];
const LINYU = {
    install(App) {
        component.forEach((item) => {
            App.component(item.name, item);
        });
    },
};

export default LINYU;