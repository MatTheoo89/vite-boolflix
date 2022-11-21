<script>

import axios from 'axios';
import { store } from './data/store'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
    components: { AppHeader, AppMain },
  name: 'App',
}
</script>

<template>

  <AppHeader />
  <AppMain />

</template>


<style lang="scss">

  @use './styles/general';



</style>