import Axios from 'axios';

const intence = Axios.create({
    baseURL: `${process.env.REACT_APP_NEWS_URL}`
});

intence.defaults.headers.common['X-Api-Key'] = process.env.REACT_APP_API_KEY;

export default intence
