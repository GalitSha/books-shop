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
import {changeDeleteState, fetchBooks, showModal} from "../actions";
import {connect} from "react-redux";
import {googleApi} from "./googleApi";


const mapStateToProps = state => {
  return {books: state.books}
};

const mapDispatchToProps = dispatch => ({
  fetchBooks: data => dispatch(fetchBooks(data))

});


export class App extends Component {

  getGoogleBooks =  () => {
    let response = googleApi;
      // await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCSo1LREj_NNz01GMAx-OhxZNpRkZZGaMc');
    // if (response.status !== 200) {
    //   console.log('Looks like there was a problem. Status Code: ' +
    //     response.status);
    //   return;
    // }

    let data = response;
    console.log(data.items);
    this.props.fetchBooks(data.items);
  };

  render() {
    this.getGoogleBooks();
    return (
      <div>
        <h2 className="main-title"> Google Books</h2>
        <div>
          <Router>
            <div className="page-container">
              <BooksList/>
              <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/book/:bookId" component={CurrentBook}/>
                <Route path="/delete" component={DeleteMessage}/>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
