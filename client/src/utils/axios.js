import Axios from 'axios';

const intence = Axios.create({
    baseURL: `https://blog-app-mhs.herokuapp.com`
})

export default intence
