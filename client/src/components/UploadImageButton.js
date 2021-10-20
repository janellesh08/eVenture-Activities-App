import React from "react";

function UploadImageButton() {
  return (
    <div className="m-3">
      <label className="mx-3">Upload Image Files: </label>
      <input className="d-none" type="file" />
      <button className="btn btn-outline-primary">Upload</button>
    </div>
  );
}

export default UploadImageButton;
