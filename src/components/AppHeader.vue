<script>
import AppSearchBar from './AppSearchBar.vue'
export default {
    components: { AppSearchBar },
    name: 'AppHeader',
}
</script>

<template>
    <header class="p-4">
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6 offset-3 d-flex">
                    <AppSearchBar />
                </div>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;

    header{
        background: linear-gradient($color-red, $color-darkgrey)
    }
</style>