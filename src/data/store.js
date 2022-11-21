import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi',
    api_key: '05313fae78870a3455445793950e677f',
    language: 'it-IT',
    inputToSearch: '',
    resultDataAll: [],
    errorMsg: '',
});