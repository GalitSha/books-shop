import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {showModal,  changeDeleteState} from "../actions";
import ChangeDetails from "./ChangeDetails";
import DeleteBook from "./DeleteBook";



const mapStateToProps = state => {
  return {books: state.books, showDetailsModal: state.showDetailsModal,
    deleteCurrentBook: state.deleteCurrentBook}
};

const mapDispatchToProps = dispatch => ({
   showModal: value => dispatch(showModal(value)),
   changeDeleteState: (value) => dispatch(changeDeleteState(value))
});


class CurrentBook extends Component {

  render() {
    const bookId = parseInt(this.props.match.params.bookId,0);
    const bookDetails = this.props.books.find(book => {
      return book.id === bookId
    });


    return (
      <div className='book-details'>
        <div>
          <img className="book-img" src={bookDetails.url} alt="book"/>
          <div className="book-title">
             {bookDetails.title}
          </div>
          <div className="book-id">
            id: {bookId}
          </div>
          <div className="book-author">
            Author Name: {bookDetails.authorName}
          </div>
          <div className="book-date">
            Publish Date: {bookDetails.publishDate}
          </div>
          <Button bsStyle="primary" onClick={() => this.props.showModal(true)}>Edit</Button>
        </div>
        <ChangeDetails show={this.props.showDetailsModal} bookId={bookId}/>
        <Button bsStyle="primary" onClick={() => this.props.changeDeleteState(true)}>Delete Book</Button>
        <DeleteBook bookId={bookId} show={this.props.deleteCurrentBook}/>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentBook);