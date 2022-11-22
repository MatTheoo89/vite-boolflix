<script>

    import { store } from '../data/store';
    import AppCard from './AppCard.vue';

export default {
    components: { AppCard },
    name: 'AppMain',
    data(){
        return{
            store
        }
    },
}
</script>

<template>
<main>
    <div class="container pt-5">
        <div class="row">

            <h2 v-if="store.movieData.length > 0">Film</h2>

                <AppCard
                    v-for="(movie, id) in store.movieData"
                    :key="id"
                    :card="movie" />
        </div>

        <div class="row">

            <h2 v-if="store.tvData.length > 0">Serie tv</h2>

                <AppCard
                    v-for="(tv, id) in store.tvData"
                    :key="id"
                    :card="tv" />
        </div>
    </div>
    
    

</main>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    main{
        background: $color-darkgrey;
        min-height: 100vh;
        h2{
            color: lighten($color-lightgrey, 10%);
            font-size: 3rem;
            font-weight: 600;
            letter-spacing: 2px;
        }
    }
</style>