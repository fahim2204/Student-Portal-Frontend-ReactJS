import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/">
              <Home/>
          </Route> */}
        </Switch>
      </Router>

    </>
  );
}

export default App;

/* <Router>
  <Switch>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route exact path="/edit">
        <EditCategory/>
    </Route>
  </Switch>
</Router> */