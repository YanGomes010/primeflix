//BASE URL https://api.themoviedb.org/3/
//URL: /movie/now_playing?api_key=eba45982107db6a59d137d00d06d29de&language=pt-BR

import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;