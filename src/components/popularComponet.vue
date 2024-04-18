<template>
    <div>

        <div class="card-front">
            <img :src="(image === 'https://image.tmdb.org/t/p/originalnull' ? '/public/images/NotFoundImg.png' : image)" class="card-img-top" :alt="title" :class="(prova ? 'd-none' : 'd-block')">
        </div>

        <div class="card-information">
            <h5 class="card-title text-center ">{{title}}</h5>
            <div class="card-text">
                <div class="flag m-auto my-1">
                    <img :src="`https://flagcdn.com/w20/${flagimg()}.png`" :alt="lenguage" >
                </div>
                <div class="text-center">
                    <span v-for="star in getStars(vote)"><i class="fa-solid fa-star text-white"></i></span>
                    <span v-for="star in maxStars - getStars(vote)"><i class="fa-regular fa-star text-white"></i></span>
                </div>
                <div class="description">
                    <p class="text-white my-2">{{description}}</p>
                </div>
                <p class="mx-2 text-end ">{{date}}</p>
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
        },
        data() {
            return {
                store,
                maxStars:5,
                prova:false,
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-fornt{
        width: 100%;
        height: 350px;
    }
    .card-information{
        display: none;
    }
    .description{
        height: 180px;
        overflow-y: auto;
    }
    .description::-webkit-scrollbar{
        display: none;
    }
    .flag{
        width: 50px;
        height: 30px;
    }
   
</style>