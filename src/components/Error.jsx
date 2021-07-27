import React from 'react'
import PropTypes from 'prop-types'
const Error = ({texto}) => {
    return (
        <div className="col-12">
            <p className="alert alert-danger text-center p-2">{texto}</p>            
        </div>
    )
}
Error.propTypes = {
    texto : PropTypes.string.isRequired
}

export default Error
