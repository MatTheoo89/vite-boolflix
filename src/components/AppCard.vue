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
        <h2>{{movie.original_title}}</h2>
        <h3>{{movie.original_language}}</h3>
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