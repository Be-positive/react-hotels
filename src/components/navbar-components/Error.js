import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <div> <h2>Error...This page is not exist!</h2>
        <Link to="/">Back to Homepage -> </Link>
            
        </div>
    )
}

export default Error
