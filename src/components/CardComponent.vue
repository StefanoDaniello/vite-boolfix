<template>
    
    <div class="st-card" @mouseenter="time()" @mouseleave="prova=false">
        <div class="card-img">
            <img :src="image" class="card-img-top" :alt="title" :class="{'d-none': prova}">
        </div>

        <div class="card-body text-white text-center"  @mouseenter="time()" @mouseleave="prova=false"  :class="{'d-block': prova}">
            <h5 class="card-title text-center ">{{title}}</h5>
            <div class="card-text">
                <p>{{lenguage}}</p>
                <div class="text-center">
                    <span v-for="star in getStars(vote)" ><i class="fa-solid fa-star text-white"></i></span>
                </div>
                <div class="description">
                    <p class="text-white my-2">{{description}}</p>
                </div>
                <p class="m-2 text-end ">{{date}}</p>
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
                prova:false
            }
        },
        methods: {
            getStars(vote) {
                const star = Math.ceil(vote / 2)
               return star
            },
            time(){
                setTimeout(() => {
                    this.prova = true
                }, 200);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .description{
        height: 200px;
        overflow-y: auto;
    }
    .description::-webkit-scrollbar{
        display: none;
    }
    .st-card {
    position: relative;
    perspective: 1000px;
    }
    .card-img {
        height: 350px;
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }
    .st-card:hover .card-img {
        transform: rotateY(180deg);
        background-color: black;
    }
    .card-body{
        position: absolute;
        top: 0;
        display: none;
    }



</style>