import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Weather from './Weather';
import '_bootstrap@4.3.1@bootstrap/dist/css/bootstrap.css';
import '../css/App.scss';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  };

  render() {
    return  <HashRouter>
              <div>
                <nav className="nav nav-pills nav-justified">
                  <Link to="/weather" className="nav-item nav-link active">天气预报</Link>
                  <Link to="/a" className="nav-item nav-link">xxxx</Link>
                  <Link to="/b" className="nav-item nav-link">xxxx</Link>
                  <Link to="/c" className="nav-item nav-link disabled" tabIndex="-1">xxxx</Link>
                </nav>
              </div>
              <Route path="/weather" component={Weather}></Route>
    
            </HashRouter>
  }
}
