import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home'

function App() {
 return ( 
<>
      <Router>
          <Nav />
          <Switch>
            <Route exact path='/'  component={Home}/>
          </Switch>
      
      </Router>

</>
    );
}
  
export default App;
