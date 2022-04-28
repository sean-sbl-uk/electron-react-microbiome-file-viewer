import React, { useState } from "react";
import {
  Modal as BootstrapModal,
  Button,
  Form,
  Row,
  InputGroup,
  Col,
} from "react-bootstrap";

const Modal = ({ show, handleCloseModal, formSubmit, files }) => {
  const [multipleSpikes, setMultipleSpikes] = useState(false);

  const spikeSwitchOnChange = (e) => {
    console.log("inside switchOnChange");
    console.log(e);
    setMultipleSpikes(!multipleSpikes);
  };

  const inputFields = (
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Control name="taxId" placeholder="TaxId"></Form.Control>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Control
          name="cellsPerMl"
          placeholder="Cells per ml"
        ></Form.Control>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Control
          name="genomeSize"
          placeholder="Genome Size"
        ></Form.Control>
      </Form.Group>
    </Row>
  );

  const formInputs = multipleSpikes ? (
    Array.from(files).map((file) => {
      let index = Array.from(files).indexOf(file);

      return (
        <div key={index} className="main-color">
          <Form.Label className="col-form-label-lg">{file.name}</Form.Label>

          {inputFields}
        </div>
      );
    })
  ) : (
    <div className="main-color">{inputFields}</div>
  );

  return (
    <BootstrapModal centered show={show} onHide={handleCloseModal}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="main-color">
          Spike Data
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <Form onSubmit={formSubmit}>
        <BootstrapModal.Body>
          {/* Form */}

          <Form.Check
            type="switch"
            id="spike-switch"
            label="Multiple Spikes"
            onChange={spikeSwitchOnChange}
            className="mb-3"
          ></Form.Check>
          {formInputs}
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button type="submit" variant="outline-secondary">
            Save Changes
          </Button>
        </BootstrapModal.Footer>{" "}
      </Form>
    </BootstrapModal>
  );
};

export default Modal;
