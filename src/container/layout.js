import React, {Component} from 'react';
import classes from './layout.css';
import axios from 'axios'
import User from '../component/user'

class Layout extends Component {
    state = {
        users: null
    }

    componentDidMount(){
        axios.get('/user/list').then(res => {
            if (this.state.users == null || this.state.users.length !== res.data.length){
                console.log('set state');
                this.setState({
                    users: res.data
                })
            }
    
        }).catch(err => console.warn(err));


    }
    render(){

        const usersComponent = !this.state.users ? null : this.state.users.map( (user, index) => {
            return (
                <User 
                    key={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    address={user.address}
                />
            )
        })

        return (
            <div className={classes.Layout}>
                {usersComponent}
            </div>
        )
    }
}

export default Layout;