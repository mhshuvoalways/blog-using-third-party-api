const Axios = require('axios')

const intence = Axios.create({
    baseURL: `${process.env.NEWS_URL}`
})

intence.defaults.headers.common['X-Api-Key'] = process.env.API_KEY

module.exports = intence
