<script>
export default {
    name: 'AppCard',
    props:{
        card: Object 
    },
    data(){
        return{
        }
    },
    methods:{
        ratingStar(){
                console.log(Math.ceil(this.card.vote_average / 2));
            return Math.ceil(this.card.vote_average / 2)
        }
    },
    mounted(){
        
    }
}
</script>

<template>
    <div class="my-card mb-5">

        <div class="my-card-image">
            <img :src="'http://image.tmdb.org/t/p/w342/' + card.poster_path" :alt="card.title || card.name">
        </div>

        <div class="my-card-hover p-3">
            <div class="info">
                <!-- titolo film o serie tv -->
            <h4>{{card.title || card.name}}</h4>

            <!-- Stampa titolo originale se differente da titotlo -->
            <h6 v-if="card.original_title !== card.title">Titolo originale: {{card.original_title}}</h6>

            <!-- stampa bandiera inglese -->
            <span :class="(card.original_language == 'en') ? 'fi fi-gb' : 'fi fi-' + card.original_language"></span>
            
            <h5 v-if="card.original_language.length <= 2">Lang: {{card.original_language}}</h5>
            
            <h5>Voto: {{this.ratingStar()}}</h5>
            </div>

            <div class="description" v-if="card.overview.length > 0">
                <p>{{card.overview}}</p>
            </div>

        </div>

    </div>


    
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    .my-card{
        position: relative;
        background-color: #fff;
        height: 450px;
        flex-basis: 23%;
        overflow: hidden;
        border-radius: 10px;
        padding: 0;
        margin: 10px auto;
        &:hover .my-card-hover{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            opacity: 1;
            background-color: rgba(0, 0, 0, .85);
        }
    }
    .my-card-image{
        height: 100%;
        img{
            max-width: 100%;
        }
    }
    .my-card-hover{
        color: white;
        position: absolute;
        top: 100%;
        opacity: 1;
        flex-basis: 25%;
        max-height: 450px;
        transition: all 700ms;
        background-color: rgba(0, 0, 0, 0);
        .info{
            height: 40%;
        }
        .description{
            height: 60%;
            overflow: auto;
            p{
                font-size: .8rem;
            }
        }
    }

</style>