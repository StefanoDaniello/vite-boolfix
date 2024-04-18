<template>
    <video controls class="video-container" @click="videoplay" >
      <source src="/src/video/Netflix-intro.mp4" type="video/mp4" >
    </video>
</template>

<script>
    export default {
        name: 'VideoComponent',
        data() {
            return {
                click:false
            }
        },
        methods: {
            videoplay(){
                if(!this.click){
                this.click = true
                    document.querySelector(".video-container").play()
                    document.querySelector(".video-container").controls = true
                    document.querySelector(".video-container").currentTime = 0;
                setTimeout(() => {
                    document.querySelector(".video-container").classList.add('d-none')
                }, 4000);
                }
            }
        },
        mounted() {
            document.querySelector(".video-container").currentTime = 0.6;
        }
    }
</script>

<style lang="scss" scoped>
    .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 200;
    }
    .netflix {
        display: none;
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