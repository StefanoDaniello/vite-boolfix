<template>
    <main>
        <div class="container my-4 py-2 bg-danger text-white text-center bg-opacity-75 rounded-3" v-if="store.error.message">
            {{ this.store.error.message }}
        </div>
        <div class="container my-4" v-if="!store.loading">
            <h2  :class="{'d-none': !store.title}">Film</h2>
            <div class="row g-0" >
                <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.movieList">
                    <CardComponent
                    :image="this.store.imageUrl + movie.poster_path"
                    :title="movie.title"
                    :date="movie.release_date"
                    :vote="movie.vote_average"
                    :description="movie.overview"/>
                </div>
            </div>
        </div>
        <div class="container my-4" v-if="!store.loading">
            <h2 :class="{'d-none': !store.title}">Serie</h2> 
            <div class="row g-0">
                <div class="col-12 col-md-6 col-lg-3" v-for="tv in store.tvList">
                    <CardComponent
                    :image="this.store.imageUrl + tv.poster_path"
                    :title="tv.original_name"
                    :date="tv.first_air_date"
                    :vote="tv.vote_average"
                    :description="tv.overview"/>
                </div>
            </div>
        </div>
        <ApiLoader v-else />
    </main>
</template>

<script>
    import{ store } from '../store'
    import CardComponent from './CardComponent.vue'
    import ApiLoader from './ApiLoader.vue'
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
        }
    }
</script>

<style lang="scss" scoped>
    main{
        height: calc(100vh - 90px);
        overflow-y: auto;
        background-color: gray;
    }
</style>