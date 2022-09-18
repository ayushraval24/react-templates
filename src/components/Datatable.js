import React, { useEffect } from "react";
import axios from "axios";
import { MDBDataTableV5 } from "mdbreact";

export default function Datatable() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Id",
        field: "id",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "id",
        },
      },
      {
        label: "name",
        field: "name",
        width: 270,
      },
      {
        label: "Username",
        field: "username",
        width: 200,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "Street",
        field: "street",
        sort: "disabled",
        width: 150,
      },
      {
        label: "City",
        field: "city",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Zip-Code",
        field: "zipcode",
        sort: "disabled",
        width: 150,
      },
    ],
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const testArr = res.data;

      const newArr = testArr.map((user) => {
        console.log(user);
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          street: user.address.street,
          city: user.address.city,
          zipcode: user.address.zipcode,
        };
      });

      setDatatable({ ...datatable, rows: newArr });
    });
  }, []);

  return (
    <div>
      <div className="container border-top border-dark mt-5">
        <MDBDataTableV5
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={datatable}
        />
      </div>
    </div>
  );
}
