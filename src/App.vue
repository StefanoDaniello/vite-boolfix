<template>
  <HeaderComponent @search="setsearch"/>
  <MainComponent/>
</template>

<script>
import axios from 'axios';
import ISO6391 from 'iso-639-1';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import ApiLoader from './components/ApiLoader.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      ApiLoader,

    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMovies() {
        return axios.get(this.store.apiUrl + this.store.endPoint.movie , this.store.options)
      },
      getSeries() {
        return axios.get(this.store.apiUrl + this.store.endPoint.tv , this.store.options)
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
        Promise.all([this.getMovies(), this.getSeries()]).then((res)=>{
        this.store.loading = true
        this.store.movieList = res[0].data.results
        this.store.tvList = res[1].data.results
        })
        .catch((error) => {
          this.store.error.message = error
        }).finally(()=>{
          this.store.loading = false
        })
      },
    },
    created() {
      this.getmostpopularmovies();
      this.getmostpopularseries();
      console.log(ISO6391.getName('en')); 
    },
    
  }
</script>

<style lang="scss" scoped>
 
</style>