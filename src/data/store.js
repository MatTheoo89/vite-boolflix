import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    api_key: '05313fae78870a3455445793950e677f',
    inputToSearch: 'matrix',
    resultDataAll: [],
    errorMsg: '',
});