import React from 'react';
import {Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="App-wrapper-content">
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route exact path="/dialogs"
          render={() => <DialogsContainer store={props.store} state={props.state}/>} />
        <Route path="/users" render={() => <UsersContainer store={props.store} state={props.state}/>} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
