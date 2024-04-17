<template>
   <header class="bg-dark">
    <div class="container d-flex justify-content-between ">
        <h1 class="text-danger">Boolflix</h1>

        <div class="search-container">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Cerca" class="form-control me-2" v-model='store.search'>
            <button class="btn btn-danger" @click="$emit('search')">Cerca</button>
        </div>

    </div>
   </header>
</template>

<script>
import { store } from '../store'
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store
            }
        }

    }
</script>

<style lang="scss" scoped>
    header{
        height: 90px;
        display: flex;
        align-items: center;
    }
    .search-container{
        display: flex;
        align-items: center;
        position: relative;
        i{
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
        input{
            padding-left: 30px;
            height: 40px;
        }
        button{
            height: 40px;
        }
    }
</style>