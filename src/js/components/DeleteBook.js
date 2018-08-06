import {Component} from "react";
import {Button, Modal} from 'react-bootstrap';
import {deleteBook} from "../actions";
import {connect} from "react-redux";



const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(deleteBook(id))
});




class DeleteBook extends Component {

  deleteBook = () => {
    const bookId = parseInt(this.props.match.params.bookId,0);
    this.props.deleteBook(bookId);
    this.props.history.push('/delete')
  };

  render() {
    return (

      <div>
        <Modal show={} animation={false}>

          <Modal.Header>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Are you sure you want to delete this book?
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={}>cancel</Button>
            <Button bsStyle="primary" onClick={this.deleteBook}>Ok</Button>
          </Modal.Footer>

        </Modal>
      </div>

    )
  }

}


export connect(null, mapDispatchToProps)(DeleteBook);