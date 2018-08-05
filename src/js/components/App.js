import React, {Component} from 'react';
import '../../css/App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import CurrentBook from './CurrentBook';
import BooksList from "./BooksList";
import {Switch} from 'react-router-dom'
import {Home} from "./Home";
import {DeleteMessage} from "./DeleteMessage";

export class App extends Component {

  render() {
    return (
      <div>
        <h2 className="main-title"> Books Shop </h2>
        <div>
          <Router>
            <div className="page-container">
              <BooksList/>
              <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/book/:bookId" component={CurrentBook}/>
                <Route path="/delete"  component={DeleteMessage}/>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    )
  }
}


export default App;
