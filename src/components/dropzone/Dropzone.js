import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Stack } from "react-bootstrap";

const Dropzone = ({ setFiles }) => {
  const onChangeHandler = (e) => {
    setFiles(e.target.files);
  };
  return (
    <div className="container my-2">
      <div className="row">
        <h1 className="my-4 main-color">File Upload</h1>
        <div className="col-md-6">
          <form data-testid="dropzone">
            <div className="form-group color files my-2">
              <label></label>
              <input
                type={"file"}
                className="form-control "
                accept=".csv"
                multiple
                onChange={onChangeHandler}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
