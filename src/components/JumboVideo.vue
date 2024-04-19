<template>
    <div class="position-relative" :class="{'d-none': store.title}" >
        <video  class="video-container" ref="jumbovideo"  >
            <source src="/src/video/jumboVideo.mp4" type="video/mp4" >
        </video>
        <div class="icons">
            <i class="fa-solid fa-volume-high" :class="{'d-none': !volume}" @click="muted"></i>
            <i class="fa-solid fa-volume-xmark" :class="{'d-none': volume}" @click="muted"></i> 
        </div>
    </div>
   
</template>

<script>
    import{ store } from '../store'
    export default {
        name: 'JumboVideo',
        data() {
            return {
                store,
                volume: false
            }
        },
        methods: {
            jumboplay(){
                console.log('ok')
                if (!this.store.title){
                    const video = this.$refs.jumbovideo; 
                    video.autoplay = true;
                    video.controls = true;  
                    video.loop = true;
                    video.currentTime = 0.5;
                    video.muted = true;
                    video.play();
                }else{
                    if(this.store.title){
                        const video = this.$refs.jumbovideo;
                        video.pause();
                        video.currentTime = 0;
                        video.muted = true;
                        video.controls = false;
                    }
                }
            },
            muted(){
                const video = this.$refs.jumbovideo; 
                video.muted = !video.muted;
                this.volume=!this.volume
            }
        },
        mounted() {
            setTimeout(() => {
                this.jumboplay()
            }, 6000);
        }
    }
</script>

<style lang="scss" scoped>
    .video-container {
        width: 100%;
        height: 550px;
        object-fit: cover;
    }
    .icons{
        width: 100px;
        position: absolute;
        top: 20px;
        right: 0;
        z-index: 10;
        i{
            color: white;
            font-size: 50px;
        }
    }
    .video-container::-webkit-media-controls {
        display: none !important;
    }
    .video-container::-webkit-media-controls-enclosure {
        display: none !important;
    }
    .video-container::-webkit-media-controls-panel {
        display: none !important;
    }
    .video-container::-webkit-media-controls-play-button {
        display: none !important;
    }
</style>