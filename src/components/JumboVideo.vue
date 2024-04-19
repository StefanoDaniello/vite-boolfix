<template>
    <video controls class="video-container" ref="jumbovideo" :class="{'d-none': store.title}" >
        <source src="/src/video/jumboVideo.mp4" type="video/mp4" >
    </video>
</template>

<script>
    import{ store } from '../store'
    export default {
        name: 'JumboVideo',
        data() {
            return {
                store
            }
        },
        methods: {
            jumboplay(){
                if (!this.store.title && this.store.JumboVideo) {
                    setTimeout(() => {
                        const video = this.$refs.jumbovideo; 
                        video.autoplay = true;
                        video.controls = true;  
                        video.loop = true;
                        video.currentTime = 0.5;
                        video.play();
                    } , 4000);
                 
                }
            }
        },
        mounted() {
            this.jumboplay()
        }
    }
</script>

<style lang="scss" scoped>
    .video-container {
        width: 100%;
        height: 550px;
        object-fit: cover;
    }
    // .video-container::-webkit-media-controls {
    //     display: none !important;
    // }

    // .video-container::-webkit-media-controls-enclosure {
    //     display: none !important;
    // }

    // .video-container::-webkit-media-controls-panel {
    //     display: none !important;
    // }

    // .video-container::-webkit-media-controls-play-button {
    //     display: none !important;
    // }
</style>