import React, {Component} from "react";
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Modal} from 'react-bootstrap';
import {connect} from "react-redux";
import {showModal, submitChanges} from "../actions";


const mapDispatchToProps = dispatch => ({
  submitChanges: (bookId, publishDate, authorName) => dispatch(submitChanges(bookId, publishDate, authorName)),
  showModal: value => dispatch(showModal(value))
});





class ChangeDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      authorName: "",
      publishDate: ""
    };
  }

  handleChangeName = (e) => {
    this.setState({authorName: e.target.value})
  };

  handleChangeDate = (e) => {
    this.setState({publishDate: e.target.value});
  };

  submitChanges = () => {
    this.props.submitChanges(this.props.bookId, this.state.publishDate, this.state.authorName)
  };

  closeModal = () => {
    this.props.showModal(false)
  };

  submitAndCloseModal = () => {
    this.submitChanges();
    this.closeModal();
  };

  render() {
    return (

      <div>
        <Modal show={this.props.show} animation={false}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form>
              <FormGroup
                id="formControlsText">
                <ControlLabel>Name OF Author</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter text" onChange={this.handleChangeName}/>
                <FormControl.Feedback/>
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>

              <FormGroup
                id="formControlsText">
                <ControlLabel>Name OF Author</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter text" onChange={this.handleChangeDate}/>
                <FormControl.Feedback/>
                <HelpBlock>Validation is based on string length.</HelpBlock>
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

export default connect(null, mapDispatchToProps)(ChangeDetails);