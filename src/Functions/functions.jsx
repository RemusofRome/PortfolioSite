import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }


 render() {
    return(
      <div id="Modal">
        <div id='ModalContainer'>
        <div id='modalHeader'>
            <h1>Contact me</h1>
            <h1 id='closeModal' onClick={() => {document.querySelector("#Modal").classList.remove('activeModal')}}>X</h1>
        </div>
        <div id='contactContainer'>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name" id='textInForm'>Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"id='textInForm'>Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message" id='textInForm'>Message</label>
            <textarea className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
      </div>
    );
  }

onNameChange(event) {
    this.setState({name: event.target.value})
  }
onEmailChange(event) {
    this.setState({email: event.target.value})
  }
onMessageChange(event) {
    this.setState({message: event.target.value})
  }
handleSubmit(event) {
   e.preventDefault();
   console.log(this.state)
  }}


  function closeModal () {
    closeModal.style.display = "none"
}



  export default Modal