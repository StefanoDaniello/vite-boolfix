<template>
  <div class="netflix">
    <HeaderComponent @search="setsearch"/>
     <MainComponent/>
  </div>
    <video controls class="video-container" @click="videoplay">
      <source src="/src/video/Netflix-intro.mp4" type="video/mp4" >
    </video>
</template>

<script>
import axios from 'axios';
import ISO6391 from 'iso-639-1';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMovies() {
        this.store.loading = true
        axios.get(this.store.apiUrl + this.store.endPoint.movie , this.store.options).then ((res)=>{
         this.store.movieList = res.data.results
        })
        .catch((error) => {
          this.store.error.message = error
        }).finally(()=>{
          this.store.loading = false
        })
      },
      getSeries() {
        this.store.loading = true
        axios.get(this.store.apiUrl + this.store.endPoint.tv , this.store.options).then ((res)=>{
         this.store.tvList = res.data.results
        })
        .catch((error) => {
          this.store.error.message = error
        }).finally(()=>{
          this.store.loading = false
        })
      },
      setsearch() {
        this.store.loading = true
        if(this.store.search){
          this.store.options.params.query = this.store.search
          this.store.title = true
        }else{
          delete this.store.options.params.query
          delete this.store.title
        }
        this.getMovies();
        this.getSeries(); 
      },
      videoplay(){
        document.querySelector(".video-container").play()
        document.querySelector(".video-container").controls = true
        document.querySelector(".video-container").currentTime = 0;
        setTimeout(() => {
          document.querySelector(".video-container").classList.add('d-none')
          document.querySelector(".netflix").classList.add('d-block')
        }, 4000);
      }
    },
    created() {
      this.getMovies();
      this.getSeries(); 
      console.log(ISO6391.getName('en')); 
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
    z-index: 2;
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