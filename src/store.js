import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    search: "",
    movieList: [],
    tvList: [],
    endPoint:{
        movie: "search/movie",
        tv: "search/tv"
    },
    options:{
        params:{
            api_key: "c2623eb63df32c9f32b41797b4f2efe5",
            language: "it-IT",
        }
    },
    imageUrl: "https://image.tmdb.org/t/p/original",
})