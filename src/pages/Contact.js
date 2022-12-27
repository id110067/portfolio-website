import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./Contact.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_anw6k3e",
        "template_zft663p",
        e.target,
        "NxWGZhy8nSnsmyA-_"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("I've recieved your message successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  }
  return (
    <>
      <Col className="col-8" style={{ textAlign: "left" }}>
        <div className="container" style={{ paddingTop: "3%" }}>
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <form onSubmit={sendEmail}>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        name="from_name"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="EMAIL"
                        name="from_email"
                      />
                    </div>
                    <div className="app-form-group message">
                      <textarea
                        className="app-form-control"
                        placeholder="MESSAGE"
                        name="message"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button" type="submit">
                        SEND
                      </button>
                    </div>
                  </form>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Contact;
