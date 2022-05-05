import React, { useState, useEffect } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import Dropzone from "../../components/dropzone/Dropzone";
import Modal from "../../components/modal/Modal";
import { useSelector } from "react-redux";

const Main = () => {
  const [files, setFiles] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [spikesSet, setSpikesSet] = useState(false);

  const spikeData = useSelector((state) => state.spikeData.data);

  useEffect(() => {
    if (Object.keys(spikeData).length !== 0) {
      setSpikesSet(true);
    }
  }, [spikeData]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const analyseButton = spikesSet ? (
    <Button variant="outline-secondary">Analyse</Button>
  ) : (
    <Button variant="outline-secondary" disabled>
      Analyse
    </Button>
  );

  const spikesButton =
    files.length === 0 ? (
      <Button variant="secondary" onClick={handleOpenModal} disabled>
        Set Spikes
      </Button>
    ) : (
      <Button variant="secondary" onClick={handleOpenModal}>
        Set Spikes
      </Button>
    );

  return (
    <section className="background">
      <div className="light-overlay">
        <Container className="">
          <div className="text-center row ">
            <Dropzone setFiles={setFiles}>
              <Stack gap={2}>
                {spikesButton}
                {analyseButton}
              </Stack>
            </Dropzone>
            <Modal
              show={showModal}
              handleCloseModal={handleCloseModal}
              files={files}
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Main;
