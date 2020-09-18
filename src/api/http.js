import axios from 'axios'
const Api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})

export default Api