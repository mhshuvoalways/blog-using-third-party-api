import Axios from 'axios';

const PROXY = window.location.hostname === "localhost"
    ? "https://cors-anywhere.herokuapp.com"
    : "/cors-proxy";

const intence = Axios.create({
    baseURL: PROXY + process.env.REACT_APP_NEWS_URL
})

intence.defaults.headers.common['X-Api-Key'] = process.env.REACT_APP_API_KEY

export default intence