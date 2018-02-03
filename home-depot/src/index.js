// React
import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Login from './components/Login/Login';
// Style
import './index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
