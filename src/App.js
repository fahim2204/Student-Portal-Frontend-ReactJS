import React from 'react';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/register/Register'
import InstructorRegistration from './components/register/InstructorRegistration'
import ModeratorRegistration from './components/register/ModeratorRegistration'
import StudentRegistration from './components/register/StudentRegistration'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import View from './components/profile/View';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/login">
              <Login/>
          </Route>
          <Route exact path="/register">
              <Register/>
          </Route>
          <Route exact path="/register/instructor">
              <InstructorRegistration/>
          </Route>
          <Route exact path="/register/moderator">
              <ModeratorRegistration/>
          </Route>
          <Route exact path="/register/student">
              <StudentRegistration/>
          </Route>
          <Route exact path="/profile/view">
              <View/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;