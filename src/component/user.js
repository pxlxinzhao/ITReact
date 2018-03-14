import React from 'react'
import classes from './user.css'

const user = (props) => {
    return (
        <div className={classes.User}>
            <div>firstName: {props.firstName}</div>
            <div>lastName: {props.lastName}</div>
            <div>address: {props.address}</div>
            <div>email: {props.email}</div>
        </div>
    )
}

export default user;