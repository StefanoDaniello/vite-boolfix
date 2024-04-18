<template>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <img :src="(image === 'https://image.tmdb.org/t/p/originalnull' ? '/public/images/NotFoundImg.png' : image)" class="card-img-top" :alt="title" :class="(prova ? 'd-none' : 'd-block')">
    </div>

    <div class="flip-card-back">
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
</div>

   

</template>

<script>
    import{ store } from '../store'
    export default {
        name: 'CardComponent',
        props: {
            image: String,
            title: String,
            date: String,
            vote: Number,
            lenguage: String,
            description: String
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
                }else if(this.lenguage === 'ko'){
                    return 'kr'
                }else if(this.lenguage === 'el'){
                    return 'gr'
                }else if(this.lenguage === 'zh'){
                    return 'cn'
                }else{
                    return this.lenguage
                }
                
            }
        },
      
        

    }
</script>

<style lang="scss" scoped>
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
    .flip-card {
    background-color: transparent;
    height: 350px;
    width: 100%;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
    background-color: #bbb;
    color: black;
    }

    /* Style the back side */
    .flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    }

</style>