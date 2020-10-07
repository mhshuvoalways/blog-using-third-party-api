import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        isEditable: false
    }
    render() {
        const {
            next,
            prev,
            isNext,
            isPrevious,
            totalPage,
            currentPage,
            handlePageChange,
            gotoPage
        } = this.props
        return (
            <div className='d-flex my-5 align-items-center'>
                <button
                    className='btn btn-warning'
                    disabled={!isPrevious}
                    onClick={() => prev()}>
                    Previous
                    </button>
                <div className='flex-grow-1 text-center'>
                    {this.state.isEditable ? (
                        <input type='number'
                            value={currentPage}
                            onChange={(event) => handlePageChange(event.target.value)}
                            onKeyPress={(e)=> {
                                if(e.key ==='Enter') {
                                    gotoPage()
                                    this.setState({isEditable:false})
                                }
                            }} />
                    ) : (
                            <p
                                style={{ userSelect: 'none', lineHeight: '1.1' }}
                                title='Double Tab to Jumb Page'
                                onDoubleClick={() => {
                                    this.setState({ isEditable: !this.state.isEditable })
                                }}>
                                {currentPage} of {totalPage}
                                <br />
                                <small>Double Tab to Edit</small>
                            </p>
                        )
                    }
                </div>
                <button
                    className='btn btn-warning ml-auto'
                    disabled={!isNext}
                    onClick={() => next()}>
                    Next
                 </button>
            </div>
        )
    }
}

export default Pagination
