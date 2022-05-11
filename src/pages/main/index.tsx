import React, { useState, useEffect } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import Dropzone from "../../components/dropzone/Dropzone";
import Modal from "../../components/modal/Modal";
import {useDispatch, useSelector } from "react-redux";
import {RootState} from '../../redux/store'
import { setRecords } from "../../redux/records";
import { readCSVFile } from "../../utils";
import {  FileRecords } from "../../utils/types";

const Main = () => {
  const [files, setFiles] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [spikesSet, setSpikesSet] = useState(false);

  const spikeData = useSelector((state: RootState) => state.spikeData.data);
  

  const dispatch = useDispatch();

  // console.log(files)

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

  const analyseOnClick = () => {

    //Process each file
    Array.from(files).forEach(fileObject => {
      const records: FileRecords = readCSVFile(fileObject)
      
      //send array of records to store with file name
      dispatch(setRecords(records))
      
      
    })

  }

  const analyseButton = spikesSet ? (
    <Button variant="outline-secondary" onClick={analyseOnClick}>Analyse</Button>
  ) : (
    <Button variant="outline-secondary" onClick={analyseOnClick} disabled>
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
