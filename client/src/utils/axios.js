import Axios from 'axios';

const intence = Axios.create({
    baseURL: `http://localhost:5000`
})

export default intence
