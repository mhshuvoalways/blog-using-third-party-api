const Axios = require('axios')

const intence = Axios.create({
    baseURL: `https://newsapi.org/v2/top-headlines`
})

intence.defaults.headers.common['X-Api-Key'] = 'c18c9dd49af0488b91e0e27f1c552fd5'

module.exports = intence
