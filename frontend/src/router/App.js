import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const App=()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
