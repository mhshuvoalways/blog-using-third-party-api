import React, { Component } from 'react'
import { newsCategory } from '../news/index'

class Header extends Component {
    state = {
        searchTerm: ''
    }

    onChangeHandle = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    onKeyPressHandle = (e) => {
        if (e.key === 'Enter') {
            this.props.search(this.state.searchTerm)
        }
    }

    render() {
        let { category, changeCategory } = this.props
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{ fontWeight: '300' }}>
                    Block Buster Headlines
                </h1>
                <input
                    type='search'
                    placeholder='Type anything & Press enter to search'
                    className='form-control'
                    onChange={this.onChangeHandle}
                    onKeyPress={this.onKeyPressHandle} />

                <div className='my-4'>
                    {newsCategory && Object.keys(newsCategory).map(item => {
                        if (category === newsCategory[item]) {
                            return (
                                <button
                                    className='btn btn-sm btn-warning mr-2 mb-2'
                                    onClick={() => changeCategory(newsCategory[item])} >
                                    {`# ${newsCategory[item]}`}
                                </button>
                            )
                        } else {
                            return (
                                <button
                                    className='btn btn-sm btn-light mr-2 mb-2'
                                    onClick={() => changeCategory(newsCategory[item])}>
                                    {`# ${newsCategory[item]}`}
                                </button>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Header
