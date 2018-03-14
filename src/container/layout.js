import React, {Component} from 'react';
import axios from 'axios'
import User from '../component/user'
// import Aux from '../component/aux'
import Nav from '../component/nav'

class Layout extends Component {
    state = {
        users: null
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

export default Layout;