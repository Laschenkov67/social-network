import React, { Component } from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                
                if (response.data.resultCode === 0) {
                    
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            })
    }
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching
    }
}

let mapDispatchToProps = {
    setUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);