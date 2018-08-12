import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {showModal,  changeDeleteState} from "../actions";
import ChangeDetails from "./ChangeDetails";
import DeleteBook from "./DeleteBook";
import {toTitleCase} from "../utils";


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
    if (this.props.books.length === 0){
      return null;
    }
    console.log(this.props.match.params.bookId);
    const bookId = this.props.match.params.bookId;
    const bookDetails = this.props.books.find(book => {
      return book.id === bookId
    });


    return (
      <div className='book-details-container'>
        <div className='book-details'>

          <div className="book-details-text">
          <div className="book-title">
            {toTitleCase(bookDetails.volumeInfo.title)}
          </div>
          <div className="book-id">
            id: {bookId}
          </div>
          <div className="book-author">
            Author Name: {toTitleCase(bookDetails.volumeInfo.authors[0])}
          </div>
          <div className="book-date">
            Publish Date: {bookDetails.volumeInfo.publishedDate}
          </div>
            <div className="current-buttons">
            <Button className="current-button" bsStyle="primary" onClick={() => this.props.showModal(true)}>Edit</Button>
            <Button className="current-button" bsStyle="primary" onClick={() => this.props.changeDeleteState(true)}>Delete Book</Button>
            </div>
            </div>
          <img className="book-img" src={bookDetails.volumeInfo.imageLinks ? bookDetails.volumeInfo.imageLinks.smallThumbnail : "https://thumbs.dreamstime.com/b/wise-owl-reading-book-sitting-pile-books-vector-illustration-white-73345208.jpg"} alt="book"/>
        </div>

        <ChangeDetails show={this.props.showDetailsModal} bookId={bookId}/>
        <DeleteBook bookId={bookId} show={this.props.deleteCurrentBook}/>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentBook);