<template>
    <main>
        <div class="container my-4">
            <div class="row g-0">
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
    </main>
</template>

<script>
    import{ store } from '../store'
    import CardComponent from './CardComponent.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardComponent
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