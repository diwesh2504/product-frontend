import React from 'react';
import Register from './Pages/Register';
import Login from './Pages/Login'
import AddItems from './Pages/AddItems';
import LandingPage from './Pages/LandingPage'
import Userview from './Pages/Userview'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/additems" component={AddItems}/>
        <Route exact path="/userview" component={Userview}/>
      </Switch>
    </Router>
  );
}

export default App;
