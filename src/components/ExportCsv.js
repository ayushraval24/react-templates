import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";

export default function ExportCsv() {
  const [fileData, setFileData] = useState();

  console.log("File data: ", fileData);

  const [fileHeaders] = useState([
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Street", key: "address.street" },
    { label: "City", key: "address.city" },
    { label: "Zipcode", key: "address.zipcode" },
  ]);

  const handleFetchData = async () => {
    const response = await axios.get("http:///localhost:5000/users");

    setFileData(response.data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div>
      <h3>Export to CSV</h3>
      {fileData?.length && (
        <CSVLink
          headers={fileHeaders}
          data={fileData}
          filename="results.csv"
          target="_blank"
        >
          Export
        </CSVLink>
      )}
    </div>
  );
}
