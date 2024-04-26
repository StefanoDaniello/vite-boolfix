<template>
    <main>
        <VideoComponent  @start="jumboplay"/>
        <div class="container my-4 py-2 bg-danger text-white text-center bg-opacity-75 rounded-3" v-if="store.error.message">
            {{ this.store.error.message }}
        </div>
        <div class="container my-4 py-2 bg-danger text-white text-center bg-opacity-75 rounded-3 d-none ">
            Non e stato trovato alcun film o serie corrispondente alla ricerca
        </div>

        <div class="position-relative" :class="{'d-none': store.title}">
            <video  class="video-container" ref="jumbovideo"  >
                <source src="/src/video/jumboVideo.mp4" type="video/mp4" >
            </video>
            <div class="icons">
                <i class="fa-solid fa-volume-high" :class="{'d-none': !volume}" @click="muted"></i>
                <i class="fa-solid fa-volume-xmark" :class="{'d-none': volume}" @click="muted"></i> 
            </div>
        </div>
   

        <div class="container-fluid p-4 bg-black position-relative" :class="{'d-none': store.title}">
            <h2  class="text-white">Most Popular Film</h2>
            <div class="cards-container" ref="card3">
                <div class="left-button" @click="leftButton3" :class="{'d-none': store.title}"><i class="fa-solid fa-angle-left text-white"></i></div>
                <div class="card-popular" v-for="(movie , index) in store.mostpopularmovies" :key="index" >
                    <div class="text-white d-flex position-relative">
                       <span class="number">{{ index + 1 }}</span>
                       <div class="copertina">
                            <img :src="(this.store.imageUrl + movie.poster_path === 'https://image.tmdb.org/t/p/originalnull' ? '/public/images/NotFoundImg.png' : this.store.imageUrl + movie.poster_path)" 
                            :alt="movie.title">
                       </div>
                       <popularComponet
                            :title="movie.title"
                            :date="movie.release_date"
                            :vote="movie.vote_average"
                            :description="movie.overview"
                            :lenguage="movie.original_language"
                        />
                    </div>
                </div>
                <div class="right-button" @click="rightButton3" :class="{'d-none': store.title}"><i class="fa-solid fa-angle-right text-white"></i></div>
            </div>
        </div>

        <div class="container-fluid p-3 position-relative" :class="{'d-none': store.title}">
            <h2 class="text-white">Most Popular Serie</h2> 
            <div class="cards-container" ref="card4">
                <div class="left-button" @click="leftButton4" :class="{'d-none': store.title}"><i class="fa-solid fa-angle-left text-white"></i></div>
                <div class="card-popular" v-for="(tv, index) in store.mostpopulartv" :key="index">
                    <div class="text-white d-flex position-relative">
                       <span class="number">{{ index + 1 }}</span>
                       <div class="copertina">
                        <img :src="(this.store.imageUrl + tv.poster_path === 'https://image.tmdb.org/t/p/originalnull' ? '/public/images/NotFoundImg.png' : this.store.imageUrl + tv.poster_path)" 
                            :alt="tv.title">
                       </div>
                       <popularComponet
                            :title="tv.original_name"
                            :date="tv.first_air_date"
                            :vote="tv.vote_average"
                            :description="tv.overview"
                            :lenguage="tv.original_language"/>
                    </div>
                </div>
                <div class="right-button" @click="rightButton4" :class="{'d-none': store.title}"><i class="fa-solid fa-angle-right text-white"></i></div>
            </div>
        </div>

        <div class="container-fluid p-4 bg-black position-relative" v-if="!store.loading">
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

        <div class="container-fluid p-3 position-relative" v-if="!store.loading">
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
    import popularComponet from './popularComponet.vue'
    import ApiLoader from './ApiLoader.vue'
    import VideoComponent from './VideoComponent.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            ApiLoader,
            popularComponet,
            VideoComponent
        },
        data() {
            return {
                store,
                volume: false
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
            },
            leftButton3(){
                this.$refs.card3.scrollBy({
                left: -900,
                behavior: "smooth",
            });
            },
            rightButton3(){
                this.$refs.card3.scrollBy({
                left: 900,
                behavior: "smooth",
            });
            },
            leftButton4(){
                this.$refs.card4.scrollBy({
                left: -900,
                behavior: "smooth",
            });
            },
            rightButton4(){
                this.$refs.card4.scrollBy({
                left: 900,
                behavior: "smooth",
            });
            },
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
                }else if (this.store.title){
                    const video = this.$refs.jumbovideo;
                    video.pause();
                    video.currentTime = 0;
                    video.muted = true;
                    video.controls = false;
                }
            },
            muted(){
                const video = this.$refs.jumbovideo; 
                video.muted = !video.muted;
                this.volume=!this.volume

            }
        },
        mounted() {
          
        }
    }
</script>

<style lang="scss" scoped>
    main{
        height: calc(100vh - 100px) ;
        overflow-y: auto;
        background-color: black;
    }
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
    .card-popular{
        background-color: black !important;
        overflow-y: hidden;
        overflow-x: hidden;
        width: 300px;
        height: 350px;
        flex-shrink: 0;
    }
    .left-button, .right-button{
        background-color: rgba(180, 180, 180, 0.603);
        width: 50px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
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
    .number{
        position: absolute;
        top: 20px;
        color: rgba(240, 240, 240, 0.911);
        font-size: 300px;
        z-index: 1;
    }
    .copertina{
        position: absolute;
        left: 50px;
    }
    .card-popular:hover{
        .info{
            display: block;
        }
    }
   
   
</style>