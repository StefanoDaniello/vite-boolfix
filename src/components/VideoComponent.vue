<template>
    <video controls class="video-container" @click="videoplay" ref="intro">
      <source src="/src/video/Netflix-intro.mp4" type="video/mp4" >
    </video>
</template>

<script>
    import{ store } from '../store'
    export default {
        name: 'VideoComponent',
        data() {
            return {
                click:false,
                store

            }
        },
        methods: {
            videoplay(){
                if(!this.click){
                this.store.JumboVideo = true
                this.click = true;
                const intro = this.$refs.intro; 
                    intro.play()
                    intro.controls = true
                    intro.currentTime = 0;
                setTimeout(() => {
                    intro.classList.add('d-none')
                }, 4000);
                }
            }
        },
        mounted() {
            const intro = this.$refs.intro; 
            intro.currentTime = 0.6;
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