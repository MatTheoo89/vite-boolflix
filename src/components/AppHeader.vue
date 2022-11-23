<script>

    import { store } from '../data/store'

export default {
    name: 'AppHeader',
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <header class="p-4">
        <div class="container">
            <div class="row">
                <div class="logo col-3">
                    <img
                        @click="$emit('ricaricaPage')"
                        src="/logo-boolflix.png" alt="logo-boolflix">
                </div>

                <div class="search-box col-5 offset-4 d-flex justify-content-end align-items-center">

                    <input
                        @keyup.enter="$emit('startSearch')"
                        v-model="store.inputToSearch"
                        class="form-control"
                        type="text"
                        placeholder="Search..."
                        aria-label="default input example">

                            <button
                                @click="$emit('startSearch')"
                                type="button"
                                class="search-btn">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                </div>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    header{
        background: linear-gradient($color-red, $color-darkgrey);
        .logo{
            width: 200px;
            img{
                cursor: pointer;
                max-width: 100%;
                &:hover{
                    scale: (1.1);
                }
            }
        }
    }

    .search-box{
        position: relative;
        padding: 0;
        input{
            position: absolute;
            z-index: 1;
            width: 30%;
            border-radius: 70px;
            border: none;
            outline: none;
            background-color: rgba(18, 18, 18, .5);
            padding: 18px 0;
            box-shadow: none;
            transition: all 750ms;
            text-indent: 20px;
            &:focus{
                color: #fff;
                width: 100%;
                box-shadow: inset -2px -2px 6px $color-red;
            }
            &::placeholder{
                color: lighten($color-lightgrey, 40%);
            }
            &:focus::placeholder {
                color: transparent;
            }
        }
    }
    button{
        z-index: 2;
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 50%;
        border: none;
        outline: none;
        background-color: $color-lightgrey;
        color: #fff;
        &:hover input{
            width: 100%;
            background-color: #fff;
        }
        i{
            font-size: 1.3rem;
        }
    }
</style>