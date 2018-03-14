import React, {Component} from 'react';
import axios from 'axios'
import User from '../component/user'
import Nav from '../component/nav'
import {connect} from 'react-redux'

class UserController extends Component {

    addFakeHandler = () => {
        axios.post('/user/addFake').then(res => {
            this.refresh();
        }).catch(err => console.warn(err));
    }

    componentDidMount(){
        this.refresh();
    }
    
    delete = (id) => {
        axios.delete('/user/delete/' + id).then(res => {
            this.refresh();
        }).catch(err => console.warn(err));
    }

    refresh = () => {
        axios.get('/user/list').then(res => {
            this.props.onLoad(res.data);
        }).catch(err => console.warn(err));
    }

    render(){
        const usersComponent = !this.props.users ? null : this.props.users.map( (user, index) => {
            return (
                <User 
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                address={user.address}
                onClick={() => this.delete(user.id)}
                />
            )
        })

        return (
            <div className="container">
                <Nav onClick={this.addFakeHandler}/>
                {usersComponent}
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        users: state.users
    }
}

const mdtp = (dispatch) => {
    return {
        onLoad: (users) => {return dispatch({type: 'LOAD_USER', users: users})}
    }
}

export default connect(mstp, mdtp)(UserController);