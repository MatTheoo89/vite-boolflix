<script>

    import { store } from '../data/store'

export default {
    name: 'AppSearchBar',
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <input
        v-model="store.inputToSearch"
        class="form-control me-4"
        type="text"
        placeholder="Search..."
        aria-label="default input example">
    <button type="button" class="btn btn-primary">Search</button>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;
</style>