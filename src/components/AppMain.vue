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
                <AppCard
        v-for="(movie, id) in store.resultDataAll.results"
        :key="id"
        :movie="movie" />
        </div>
    </div>
    
    

</main>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    main{
        background: $color-darkgrey;
        min-height: 100vh;
    }
</style>