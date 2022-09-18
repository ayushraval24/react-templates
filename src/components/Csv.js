import React, { useState } from "react";
import axios from "axios";

export default function Csv() {
  const [fileVal, setFileVal] = useState();

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setFileVal(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileVal);

    const url = "http://localhost:8000/api/csv";

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <form action="" onSubmit={submitHandler}>
        <input
          type="file"
          name="csvFile"
          style={{ margin: "auto" }}
          onChange={fileHandler}
        />
        <button type="submit">Upload File</button>
      </form>
    </div>
  );
}
