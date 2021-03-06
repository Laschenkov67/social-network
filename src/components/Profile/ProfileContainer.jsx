import React, { Component } from 'react'
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import {withRouter } from 'react-router-dom';

class ProfileContainer extends Component {

  componentDidMount() {
    
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile  {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
      profile: state.profilePage.profile
  }
}

let mapDispatchToProps = {
    setUserProfile
}

let WithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlData);