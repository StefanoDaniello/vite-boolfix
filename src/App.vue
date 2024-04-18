<template>
  <HeaderComponent @search="setsearch"/>
  <MainComponent/>
  <VideoComponent/>
</template>

<script>
import axios from 'axios';
import ISO6391 from 'iso-639-1';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import ApiLoader from './components/ApiLoader.vue';
import VideoComponent from './components/VideoComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      ApiLoader,
      VideoComponent

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
      getmostpopularmovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie , this.store.seconds_options).then ((res)=>{
         this.store.mostpopularmovies = res.data.results
        })
        .catch((error) => {
          this.store.error.message = error
        })
      },
      getmostpopularseries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv , this.store.seconds_options).then ((res)=>{
         this.store.mostpopulartv = res.data.results
        })
        .catch((error) => {
          this.store.error.message = error
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
      
    },
    created() {
      this.getMovies();
      this.getSeries(); 
      this.getmostpopularmovies();
      this.getmostpopularseries();
      console.log(ISO6391.getName('en')); 
    },
    
  }
</script>

<style lang="scss" scoped>
 
</style>