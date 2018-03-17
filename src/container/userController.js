import React, {Component} from 'react';
import axios from 'axios'
import User from '../component/user'
import Nav from '../component/nav'
import {connect} from 'react-redux'
import Loader from '../component/loader'

class UserController extends Component {

    state = {
        isLoading: false
    }

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
        this.setState({...this.state, isLoading: true});
        axios.get('/user/list').then(res => {
            this.props.onLoad(res.data);
            this.setState({...this.state, isLoading: false});
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
                {this.state.isLoading ? <Loader/> : usersComponent}
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