import React from "react";

function UploadVideoButton() {
  return (
    <div className="m-3">
      <label className="mx-3">Upload Video Files: </label>
      <input className="d-none" type="file" />
      <button className="btn btn-outline-primary">Upload</button>
    </div>
  );
}

export default UploadVideoButton;