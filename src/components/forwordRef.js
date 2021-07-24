import React from 'react'

const forwordRef = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="jumbotron">
            <hi >Hi this is testing</hi>
        </div>
    )
})

export default forwordRef
