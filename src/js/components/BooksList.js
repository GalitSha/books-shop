import React, {Component} from "react";
import {connect} from 'react-redux';
import {
  Link, withRouter,
} from 'react-router-dom';
import {toTitleCase} from "../utils";


const mapStateToProps = state => {
  return {books: state.books}
};


class BooksList extends Component {

  render() {
    return (
      <div className="horizontal-container">
        <ul className="vertical-menu">
          {this.props.books.map((book) =>
            <li key={book.id}>
              <div className="link-container">
              <Link to={'/book/' + book.id} className="link">
                <img className="menu-img-book" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://thumbs.dreamstime.com/b/wise-owl-reading-book-sitting-pile-books-vector-illustration-white-73345208.jpg"}/>
                <h5 className="link-text">{toTitleCase(book.volumeInfo.title)}</h5>
              </Link>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(BooksList);