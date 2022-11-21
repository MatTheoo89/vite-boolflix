<script>
export default {
    name: 'AppCard',
    props:{
        movie: Object,
    }
}
</script>

<template>
<ul>
    <li>
        <h1>{{movie.results.title}}</h1>
        <h2>{{movie.results.original_title}}</h2>
        <h3>{{movie.results.original_language}}</h3>
        <h4>{{movie.results.vote_average}}</h4>
    </li>
</ul>
    
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;
</style>