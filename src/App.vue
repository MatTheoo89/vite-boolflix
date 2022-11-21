<script>

import axios from 'axios';
import { store } from './data/store'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: { AppHeader, AppMain },
  name: 'App',
  data(){
    return{
      store
    }
  },
  methods:{
    getCallApi(){
      axios.get(store.apiUrl,{params:{
        api_key: store.api_key,
        query: store.inputToSearch,
      }})
      .then(result => {store.resultDataAll = result.data;})
      .catch( error => {store.errorMsg = error;})
    }
  },
  mounted(){
    this.getCallApi();
  },
}
</script>

<template>

  <AppHeader />
  <AppMain @startSearch='getCallApi()'/>

</template>


<style lang="scss">

  @use './styles/general';



</style>