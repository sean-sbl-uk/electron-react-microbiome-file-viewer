import React, { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import Dropzone from "../../components/dropzone/index";
import Modal from "../../components/modal";

const Main = () => {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [spikesSet, setSpikesSet] = useState(false);

  //   console.log(files);

  const handleOpenModal = () => {
    // show modal if no files selected
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log("inside formSubmit Settings");
    console.log(e.target);
    handleCloseModal();
  };

  const analyseButton = spikesSet ? (
    <Button variant="outline-secondary">Analyse</Button>
  ) : (
    <Button variant="outline-secondary" disabled></Button>
  );

  const filtersButton =
    files.length === 0 ? (
      <Button variant="secondary" onClick={handleOpenModal} disabled>
        Set Filters
      </Button>
    ) : (
      <Button variant="secondary" onClick={handleOpenModal}>
        Set Filters
      </Button>
    );

  return (
    <section className="background">
      <div className="light-overlay">
        <Container className="">
          <div className="text-center row ">
            <Dropzone setFiles={setFiles} />

            <Stack gap={2} className="col-md-5 mx-auto my-auto a">
              {filtersButton}
              {analyseButton}
            </Stack>

            <Modal
              show={showModal}
              handleCloseModal={handleCloseModal}
              formSubmit={formSubmit}
              files={files}
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Main;
