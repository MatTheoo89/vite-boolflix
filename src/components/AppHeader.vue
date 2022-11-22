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
                <div class="col-6 offset-3 d-flex">
                    <input
                        @keyup.enter="$emit('startSearch')"
                        v-model="store.inputToSearch"
                        class="form-control me-4"
                        type="text"
                        placeholder="Search..."
                        aria-label="default input example">
                    <button
                        @click="$emit('startSearch')"
                        type="button"
                        class="btn btn-primary">Search
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
            }
        }
    }
</style>