import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Firstpage from './Firstpage'
import First_logo from './First_logo'
import Home from './Home'


function App() {
  return (
    <Router>
      <div className="app">
       <Switch>
       <Route path="/Home">
           <Home />
         </Route>
         <Route path='/Tablepage'>
           <h1>Table page</h1>
         </Route>
         <Route path="/">
           <Firstpage />
           <First_logo/>
         </Route>
        
       </Switch>
     </div>
    </Router>  
  );
}

export default App;

