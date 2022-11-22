<script>
export default {
    name: 'AppCard',
    props:{
        card: Object 
    },
    methods:{
        ratingStar(){
                console.log(Math.ceil(this.card.vote_average / 2));
            return Math.ceil(this.card.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="my-card mb-5">

        <div class="my-card-image">
            <img v-if="card.poster_path !== null" :src="'http://image.tmdb.org/t/p/w342/' + card.poster_path" :alt="card.title || card.name" >
            <img v-else src="../assets/img/no-image.webp" alt="no image avaible" style="height: 100%;">
        </div>

        <div class="my-card-hover p-3">
            <div class="info">
                <!-- titolo film o serie tv -->
                <h4>{{card.title || card.name}}</h4>

                <!-- Stampa titolo originale se differente da titotlo -->
                <h6 v-if="card.original_title !== card.title">Titolo originale: {{card.original_title}}</h6>

                <!-- stampa bandiera inglese-->
                <span :class="(card.original_language == 'en') ? 'fi fi-gb' : 'fi fi-' + card.original_language"></span>
                
                <h5 v-if="card.original_language.length <= 2">Lang: {{card.original_language}}</h5>
                
                <!--v-if="this.ratingStar() > 0" -->
                <h5 v-if="this.ratingStar() > 0">Voto:
                    <i 
                        v-for="(star, i) in this.ratingStar()" :key="i"
                        class="fa-solid fa-star"></i>/ 5
                </h5>
                <h5 v-else>Voto: <span>Nessun voto</span></h5>
            </div>

            <div id="scrollbar" class="description" v-if="card.overview.length > 0">
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
        height: 430px;
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
            background-color: rgba(0, 0, 0, .65);
        }
        &:hover img{
            filter: brightness(.4) blur(2px);
        }
    }
    .my-card-image{
        height: 100%;
        img{
            max-width: 100%;
            filter: brightness(1) blur(0px);
            transition: all 680ms;
        }
    }
    .my-card-hover{
        display: flex;
        flex-direction: column;
        color: white;
        position: absolute;
        top: 100%;
        opacity: 1;
        flex-basis: 25%;
        max-height: 450px;
        transition: all 700ms;
        background-color: rgba(0, 0, 0, 0);
        .info{
            margin-bottom: 10px;
            i{
                color: #d4af37;
                margin-right: 5px;
            }
            h5{
                span{
                    font-size: .8rem;
                }
            }
        }
        .description{
            overflow: auto;
            &{
                scrollbar-width: thin;
                scroll-padding-block-start: 3px;
                scrollbar-color: lighten($color-darkgrey, 5%) rgba(51, 51, 51, 0.1) ;
}
            p{
                font-size: .8rem;
                padding: 3px;
            }
        }
    }

</style>