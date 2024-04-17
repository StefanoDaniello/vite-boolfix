<template>
  <HeaderComponent @search="setsearch"/>
  <MainComponent/>
</template>

<script>
import axios from 'axios';
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
        axios.get(this.store.apiUrl + this.store.endPoint.movie , this.store.options).then ((res)=>{
         this.store.movieList = res.data.results
        })
      },
      getSeries() {
        axios.get(this.store.apiUrl + this.store.endPoint.tv , this.store.options).then ((res)=>{
         this.store.tvList = res.data.results
        })
      },
      setsearch() {
        if(this.store.search){
          this.store.options.params.query = this.store.search
        }else{
          delete this.store.options.params.query
        }
        this.getMovies();
        this.getSeries(); 
      }
    },
    created() {
      this.getMovies();
      this.getSeries(); 
    }
  }
</script>

<style lang="scss" scoped>

</style>