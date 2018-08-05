import React, {Component} from "react";
import {connect} from 'react-redux';
import {
  Link, withRouter,
} from 'react-router-dom';


const mapStateToProps = state => {
  return {books: state.books}
};


class BooksList extends Component {

  render() {
    return (
      <div>
        <ul className="vertical-menu">
          <li id="menu-title">Books List</li>
          {this.props.books.map((book) => <li key={book.id}> <Link to={'/book/' + book.id} className="link">{book.title}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(BooksList);