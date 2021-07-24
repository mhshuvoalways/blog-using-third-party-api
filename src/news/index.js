import Axios from '../utils/axios'

export const newsCategory = {
    technology: 'technology',
    science: 'science',
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    sports: 'sports'
}

const MAX_ITEM_PAR_PAGE = 10

class News {
    constructor(category) {
        this._category = category
        this._searchTerm = ''
        this._pageSize = MAX_ITEM_PAR_PAGE
        this._currentPage = 1
        this._totalPage = 1
    }

    async getNews() {
        try {
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                }
            }
            const { data } = await Axios.get(this._getUrl(), config)
            this._totalPage = Math.ceil(data.totalResults / this._pageSize)
            return {
                articles: data.articles,
                isNext: this._isNext(),
                isPrevious: this._isPrevious(),
                totalResults: data.totalResults,
                category: this._category,
                totalPage: this._totalPage,
                currentPage: this._currentPage
            }
        } catch (e) {
            throw new Error(e)
        }
    }

    next() {
        if (this._isNext()) {
            this._currentPage++
            return this.getNews()
        }
        return false
    }

    prev() {
        if (this._isPrevious()) {
            this._currentPage--
            return this.getNews()
        }
        return false
    }

    setCurrentPage(pageNumber) {
        if (pageNumber < 1 && pageNumber > this._totalPage) {
            throw new Error('Invaid page number')
        }
        this._currentPage = pageNumber
        return this.getNews()
    }

    setChangeCategory(category) {
        this._category = category
        this._currentPage = 1
        return this.getNews()
    }

    search(term) {
        this._searchTerm = term
        return this.getNews()
    }

    _getUrl() {
        let url = '?'

        if (this._category) url += `&category=${this._category}`
        if (this._searchTerm) url += `&q=${this._searchTerm}`
        if (this._pageSize) url += `&pageSize=${this._pageSize}`
        if (this._currentPage) url += `&page=${this._currentPage}`

        return url
    }

    _isNext() {
        return this._currentPage < this._totalPage
    }

    _isPrevious() {
        return this._currentPage > 1
    }

}

export default News