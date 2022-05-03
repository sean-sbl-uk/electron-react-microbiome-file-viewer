import React, { useState, useRef } from "react";
import {
  Modal as BootstrapModal,
  Button,
  Form,
  Row,
  InputGroup,
  Col,
} from "react-bootstrap";

const Modal = ({ show, handleCloseModal, setSpikeData, files }) => {
  const [multipleSpikes, setMultipleSpikes] = useState(false);
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity()) {
      console.log("valid form");
      setSpikeData(formData);

      console.log(formData);
      handleCloseModal();
    } else {
      console.log("invalid form");
    }
    setValidated(true);
  };

  const onFormChange = (e, updatedAt) => {
    const id = e.target.id;
    const fileName = id.split("/")[1];

    setFormData({
      ...formData,
      [fileName]: {
        ...formData[fileName],
        [e.target.name]: e.target.value,
      },
    });

    // console.log(formData);
  };

  const spikeSwitchOnChange = () => {
    setMultipleSpikes(!multipleSpikes);
  };

  const inputFields = (fileName) => {
    return (
      <Row className="mb-3">
        {/*<Form.Group>
          <Form.Control
            name="fileName"
            value={fileName}
            // {...fileName}
            // readOnly={fileName}
            hidden
            ref={ref}
          ></Form.Control>
    </Form.Group>*/}

        <Form.Group as={Col}>
          <Form.Control
            required
            name="taxId"
            type="text"
            // {...fileName}
            id={`taxId/ ${fileName}`}
            placeholder="TaxId"
            onChange={onFormChange}
          ></Form.Control>

          <Form.Control.Feedback type="invalid">
            Provide taxId
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control
            required
            name="cellsPerMl"
            type="number"
            // {...fileName}
            id={`cellsPerMl/ ${fileName}`}
            placeholder="Cells per ml"
            onChange={onFormChange}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Provide cells per ml
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control
            required
            name="genomeSize"
            type="number"
            // {...fileName}
            id={`genomeSize/ ${fileName}`}
            placeholder="Genome Size"
            onChange={onFormChange}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Provide genome size
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    );
  };

  const formInputs = multipleSpikes ? (
    Array.from(files).map((file) => {
      let index = Array.from(files).indexOf(file);

      return (
        <div key={index} className="main-color">
          <Form.Label
            data-testid={`label-${file.name}`}
            className="col-form-label-lg"
          >
            {file.name}
          </Form.Label>

          {inputFields(file.name)}
        </div>
      );
    })
  ) : (
    <div className="main-color">{inputFields("none")}</div>
  );

  return (
    <BootstrapModal
      data-testid="modal"
      centered
      show={show}
      onHide={handleCloseModal}
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="main-color">
          Spike Data
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <Form
        onSubmit={handleSubmit}
        className="needs-validation"
        noValidate
        validated={validated}
      >
        <BootstrapModal.Body>
          {/* Form */}

          <Form.Check
            type="switch"
            id="spike-switch"
            label="Multiple Spikes"
            onChange={spikeSwitchOnChange}
            className="mb-3"
            data-testid="spike-switch"
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
