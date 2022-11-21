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
        language: store.language,
      }})
      .then(result => {
        store.resultDataAll.results.forEach(item => {
          if (item.original_language == 'en') {
            item.original_language = 'gb';
          }
        });
      }).catch( error => {store.errorMsg = error;})
    }
  },
  mounted(){
    this.getCallApi();
  },
}
</script>

<template>

  <AppHeader @startSearch='getCallApi()'/>
  <AppMain />

</template>


<style lang="scss">

  @use './styles/general';



</style>