import React from 'react'

const loader = () => {
    const style = {
        textAlign: 'center'
    }

    return (
        <div style={style}>Waiting for response from heroku...</div>
    )
}

export default loader;