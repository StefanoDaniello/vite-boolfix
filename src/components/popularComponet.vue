<template>
    <div class="info">
        <div class="card-body" controls muted @mouseenter="videoplay">
                <video class="film">
                    <source src="/src/video/Netflix-intro.mp4" type="video/mp4" >
                </video>
            <p class="mx-2 text-end ">{{date}}</p>
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
            image: String,
            title: String,
            date: String,
            vote: Number,
            lenguage: String,
            description: String,
            imgsfondo: String
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
                }else{
                    return this.lenguage
                }
            },
            videoplay(){
                document.querySelector(".film").play()
                document.querySelector(".film").controls = true
                document.querySelector(".film").currentTime = 0;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .info{
        display: none;
        background-color: black;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        padding: 5px;
        border-radius: 5px;
        .card-text{
            height: 100px;
            overflow-y: auto;
        }
        .card-text::-webkit-scrollbar{
        display: none;
        }
    }
    .flag{
        width: 40px;
        height: 25px;
    }
    .film{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    .film::-webkit-media-controls-play-button {
    display: none !important;
    }
</style>