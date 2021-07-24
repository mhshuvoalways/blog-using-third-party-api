import Axios from 'axios';

const intence = Axios.create({
    baseURL: process.env.REACT_APP_NEWS_URL,
    headers: { "Access-Control-Allow-Origin": "*" }
})

intence.defaults.headers.common['X-Api-Key'] = process.env.REACT_APP_API_KEY

export default intence