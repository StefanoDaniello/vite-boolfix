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
      }
    },
    created() {
      this.getMovies();
      this.getSeries(); 
      console.log(ISO6391.getName('en'));
    }
  }
</script>

<style lang="scss" scoped>

</style>