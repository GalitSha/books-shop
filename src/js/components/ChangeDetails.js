import React, {Component} from "react";
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Modal} from 'react-bootstrap';
import {connect} from "react-redux";
import {showModal, submitChanges} from "../actions";


const mapDispatchToProps = dispatch => ({
  submitChanges: (bookId, publishDate, authorName) => dispatch(submitChanges(bookId, publishDate, authorName)),
  showModal: value => dispatch(showModal(value))
});

const mapStateToProps = state => {
  return {books: state.books}
};


class ChangeDetails extends Component {
  constructor(props){
    super(props);
    let currentBook = this.props.books.find(book => {
      if (book.id === this.props.bookId){
        return book
      }
    });
    this.state = {
      authorName: [currentBook.volumeInfo.authors],
      publishDate: currentBook.volumeInfo.publishedDate,
      validName: null,
      validDate: null
    };
  }


  handleChangeName = (e) => {
    this.setState({authorName: e.target.value});
  };


  validateName = (e) => {
    this.handleChangeName(e);
    if (e.target.value.match(/[A-Z|a-z]/i)) {
      this.setState({validName: "success"})
    } else {
      this.setState({validName: "error"})
    }
  };



  handleChangeDate = (e) => {
    this.setState({publishDate: e.target.value});
  };

  validateDate = (e) => {
    this.handleChangeDate(e);
    if (!isNaN(e.target.value)) {
      this.setState({validDate: "success"})
    } else {
      this.setState({validDate: "error"})
    }
  };











  submitChanges = () => {
    this.props.submitChanges(this.props.bookId, this.state.publishDate, this.state.authorName)
  };

  closeModal = () => {
    this.props.showModal(false);
  };

  submitAndCloseModal = () => {
    this.submitChanges();
    this.closeModal();
  };

  render() {
    return (

      <div>
        <Modal show={this.props.show} animation={false} className="modal">
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form>
              <FormGroup
                id="formControlsText" validationState={this.state.validName}>
                <ControlLabel>Name OF Author</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter author name" onChange={this.validateName} />
                <FormControl.Feedback/>
                <HelpBlock>Please enter a valid name(A-Z/a-z)</HelpBlock>
              </FormGroup>

              <FormGroup
                id="formControlsText" validationState={this.state.validDate}>

                <ControlLabel>Publish Date</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter publish date" onChange={this.validateDate}/>
                <FormControl.Feedback/>
                <HelpBlock>Please enter a valid date(numbers only)</HelpBlock>
              </FormGroup>

            </form>

          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
            <Button bsStyle="primary" onClick={this.submitAndCloseModal}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>


    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeDetails);