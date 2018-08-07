import {Component} from "react";
import {Button, Modal} from 'react-bootstrap';
import {changeDeleteState, deleteBook} from "../actions";
import {connect} from "react-redux";
import React from "react";
import {Route , withRouter} from 'react-router-dom';




 const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(deleteBook(id)),
   changeDeleteState: value => dispatch(changeDeleteState(value))
});




class DeleteBook extends Component {

  onApprovalDelete = () => {
    this.props.deleteBook(this.props.bookId);
    this.props.changeDeleteState(false);
    this.props.history.push('/delete');
  };

  render() {
    return (

      <div>
        <Modal show={this.props.show} animation={false}>

          <Modal.Header>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Are you sure you want to delete this book?
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.props.changeDeleteState(false)}>cancel</Button>
            <Button bsStyle="primary" onClick={this.onApprovalDelete}>Delete</Button>
          </Modal.Footer>

        </Modal>
      </div>

    )
  }

}


export default withRouter(connect(null, mapDispatchToProps)(DeleteBook));