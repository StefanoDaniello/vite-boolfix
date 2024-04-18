<template>
    <main>
        <div class="container my-4 py-2 bg-danger text-white text-center bg-opacity-75 rounded-3" v-if="store.error.message">
            {{ this.store.error.message }}
        </div>
        <div class="container my-4 py-2 bg-danger text-white text-center bg-opacity-75 rounded-3 d-none ">
            Non e stato trovato alcun film o serie corrispondente alla ricerca
        </div>


        <div class="container-fluid p-4 bg-black" v-if="!store.loading">
            <h2  :class="{'d-none': !store.title}" class="text-white">Film</h2>

            <div class="cards-container" ref="card1">
                <div class="left-button" @click="leftButton1" :class="{'d-none': !store.title}"><i class="fa-solid fa-angle-left text-white"></i></div>
                <div class="card" v-for="movie in store.movieList" >
                    <CardComponent
                    :image="this.store.imageUrl + movie.poster_path"
                    :title="movie.title"
                    :date="movie.release_date"
                    :vote="movie.vote_average"
                    :description="movie.overview"
                    :lenguage="movie.original_language"/>
                </div>
                <div class="right-button" @click="rightButton1" :class="{'d-none': !store.title}"><i class="fa-solid fa-angle-right text-white"></i></div>
            </div>

        </div>

        <div class="container-fluid p-3" v-if="!store.loading">
            <h2 :class="{'d-none': !store.title}" class="text-white">Serie</h2> 
            <div class="cards-container" ref="card2">
                <div class="left-button" @click="leftButton2" :class="{'d-none': !store.title}"><i class="fa-solid fa-angle-left text-white"></i></div>
                <div class="card" v-for="tv in store.tvList" >
                    <CardComponent
                    :image="this.store.imageUrl + tv.poster_path"
                    :title="tv.original_name"
                    :date="tv.first_air_date"
                    :vote="tv.vote_average"
                    :description="tv.overview"
                    :lenguage="tv.original_language"/>
                </div>
                <div class="right-button" @click="rightButton2" :class="{'d-none': !store.title}"><i class="fa-solid fa-angle-right text-white"></i></div>
            </div>
        </div>
        <ApiLoader v-else />
    </main>
</template>

<script>
    import{ store } from '../store'
    import CardComponent from './CardComponent.vue'
    import ApiLoader from './ApiLoader.vue'
import { Transition } from 'vue'
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            ApiLoader
        },
        data() {
            return {
                store
            }
        },
        methods: {
            leftButton1(){
                this.$refs.card1.scrollBy({
                left: -900,
                behavior: "smooth",
            });
            },
            rightButton1(){
                this.$refs.card1.scrollBy({
                left: 900,
                behavior: "smooth",
            });
            },
            leftButton2(){
                this.$refs.card2.scrollBy({
                left: -900,
                behavior: "smooth",
            });
            },
            rightButton2(){
                this.$refs.card2.scrollBy({
                left: 900,
                behavior: "smooth",
            });
            }
        }
    }
</script>

<style lang="scss" scoped>
    main{
        height: calc(100vh - 90px);
        overflow-y: auto;
        background-color: black;
    }
    .cards-container{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
    }
    .cards-container::-webkit-scrollbar{
        display: none;
    }
    .card{
        background-color: black !important;
        overflow-y: hidden;
        overflow-x: hidden;
        width: 300px;
        height: 350px;
        flex-shrink: 0;
    }
    .left-button, .right-button{
        background-color: rgba(180, 180, 180, 0.555);
        width: 50px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        i{
            font-size: 30px;
        }
    }
    .left-button{
        position: absolute;
        left: 0;
    }
    .right-button{
        position: absolute;
        right: 0;
    }
   
</style>