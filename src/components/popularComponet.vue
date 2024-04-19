<template>
    <div class="info" @mouseenter="videoplay" @mouseleave="videoStop">
        <div class="card-body" controls muted>
                <video class="film" ref="film">
                    <source src="/src/video/Netflix-intro.mp4" type="video/mp4" >
                </video>
            <p class="mx-2 text-end ">{{date}}</p>
            <div class="icons">
                <!-- <i class="fa-regular fa-thumbs-up" ></i> -->
                <i class="fa-solid fa-thumbs-up"></i>
                <i class="fa-solid fa-share"></i>
                <i class="fa-solid fa-plus"></i>
            </div>
            <h5 class="text-center">{{ title }}</h5>
            <div class="flag m-auto my-1">
                <img :src="`https://flagcdn.com/w20/${flagimg()}.png`" :alt="lenguage" >
            </div>
            <div class="text-center">
                <span v-for="star in getStars(vote)"><i class="fa-solid fa-star text-white"></i></span>
                <span v-for="star in maxStars - getStars(vote)"><i class="fa-regular fa-star text-white"></i></span>
            </div>
           
        </div>
    </div>
</template>

<script>
import{ store } from '../store'
    export default {
        name: 'popularComponet',
        props: {
            title: String,
            date: String,
            vote: Number,
            lenguage: String,
        },
        data() {
            return {
                store,
                maxStars:5,
            }
        },
        methods: {
            getStars(vote) {
                const star = Math.ceil(vote / 2)
               return star
            },
            flagimg(){
                if(this.lenguage === 'en'){
                    return 'gb'
                }else if(this.lenguage === 'ja'){
                    return 'jp'
                }else if(this.lenguage === 'ko'){
                    return 'kr'
                }else if(this.lenguage === 'el'){
                    return 'gr'
                }else if(this.lenguage === 'zh'){
                    return 'cn'
                }else if(this.lenguage === 'hi'){
                    return 'in'
                }else if(this.lenguage === 'cs'){
                    return 'cz'
                }else{
                    return this.lenguage
                }
            },
            videoplay(){
                const video = this.$refs.film; 
                video.currentTime = 0;
                video.play();
                video.muted = true;
                video.controls = true;
            },
            videoStop(){
                const video = this.$refs.film; 
                video.pause();
                video.controls = false;
            },
            like(){
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    .info{
        border: 1px solid white;
        display: none;
        background-color: rgba(0, 0, 0, 0.753);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        padding: 10px;
        border-radius: 5px;
        height: 350px;
    }
    .flag{
        width: 40px;
        height: 25px;
    }
    .film{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 200;
    }
    .film::-webkit-media-controls-play-button {
    display: none !important;
    }
    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        i{
            cursor: pointer;
            color: white;
            font-size: 20px;
            padding: 3px;
        }
    }
</style>