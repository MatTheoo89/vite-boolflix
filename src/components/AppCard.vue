<script>
export default {
    name: 'AppCard',
    props:{
        movie: Object,
    }
}
</script>

<template>
<div class="col-3">
    <ul>
    <li>

        <h1>{{movie.title}}</h1>
        <h2
            v-if="movie.original_title !== movie.title"
        >{{movie.original_title}}</h2>
        <span :class="'fi fi-' + movie.original_language" ></span>
        <p>lang: {{movie.original_language}}</p>
        <h4>{{movie.vote_average}}</h4>
    </li>
</ul>
</div>

    
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;
    ul{
        color: #fff;
    }
</style>