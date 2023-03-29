import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Icon } from "@iconify/react";
import "../css/Master.css";
function Example(props) {
  const { title, description, wireframe, prototype } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>{title}</h4> */}
        <p>{description}</p>
        <a href={wireframe} target="_blank">
          Wireframe
        </a>
        <br></br>
        <a href={prototype} target="_blank">
          Prototype
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Example;
