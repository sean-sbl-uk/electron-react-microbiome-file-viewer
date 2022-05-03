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
          <form>
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

            {/* Maybe move up to main component */}
            {/*<Stack gap={2} className="col-md-5 mx-auto my-auto a">
              <Button variant="secondary">Import</Button>
              <Button variant="outline-secondary">Set Filters</Button>
            </Stack>*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
