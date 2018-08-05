import React, {Component} from 'react';
import '../../css/App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import CurrentBook from './CurrentBook';
import BooksList from "./BooksList";
import ChangeDetails from "./ChangeDetails";
import {Switch} from 'react-router-dom'

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
                <Route path="/book/:bookId" component={CurrentBook}/>
                {/*<Route path="/book/change-details" component={ChangeDetails}/>*/}
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    )
  }
}


export default App;
