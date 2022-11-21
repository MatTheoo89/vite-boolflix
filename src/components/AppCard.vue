<script>
export default {
    name: 'AppCard',
    props:{
        movie: Object,
    }
}
</script>

<template>
    <div class="my-card mb-5">

        <div class="my-card-image">
            <img :src="'http://image.tmdb.org/t/p/w342/' + movie.poster_path" :alt="movie.title">
        </div>

        <div class="my-card-text p-3">
            <h4>{{movie.title}}</h4>
            <h5
                v-if="movie.original_title !== movie.title"
            >{{movie.original_title}}</h5>
            <span :class="'fi fi-' + movie.original_language" ></span>
            <h5>lang: {{movie.original_language}}</h5>
            <h5>{{movie.vote_average}}</h5>
            <p>{{movie.overview}}</p>
    </div>
</div>


    
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    .my-card{
        position: relative;
        flex-basis: 25%;
        max-height: 450px;
        overflow: hidden;
        &:hover .my-card-text{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            opacity: 1;
            background-color: rgba(0, 0, 0, .97);

        }
        img{
            max-width: 100%;
            border-radius: 10px;
        }
    }

    .my-card-text{
        color: white;
        position: absolute;
        top: 100%;
        opacity: 0;
        flex-basis: 25%;
        max-height: 450px;
        transition: all 700ms;
        height: 60%;
        background-color: rgba(0, 0, 0, 0);
        p{
            overflow: auto;
            height: 60%;
        }
    }

</style>