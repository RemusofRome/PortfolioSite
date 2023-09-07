import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div id="Modal">
        <div id="ModalContainer">
          <div id="modalHeader">
            <h1>Contact me</h1>
            <h1
              id="closeModal"
              onClick={() => {
                document
                  .querySelector("#Modal")
                  .classList.remove("activeModal");
              }}
            >
              X
            </h1>
          </div>
          <div id="contactContainer">

            <form id="contact-form" action="https://usebasin.com/f/6084fad100dc" method="POST">

              <div className="form-group">
                <label htmlFor="name" id="textInForm">Name</label>
                <input type="text" name="name" className="form-control"/>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" id="textInForm">Email address</label>
                <input type="email" name="email" className="form-control"/>
              </div>

              <div className="form-group">
                <label htmlFor="message" id="textInForm">Message</label>
                <textarea name="message" className="form-control"/>
              </div>

              <button type="submit">Submit</button>

            </form>
            
          </div>
        </div>
      </div>
    );
  }
}

  



export default Modal;
