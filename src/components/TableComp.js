import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

export default function TableComp() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filterdData, setFilterdData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  // const [char, setChar] = useState("");

  const filterHandle = (e) => {
    setFilter(true);
    const filteredUsers = users
      .filter((user) => user.name.includes(e.target.value))
      .map((ele) => (
        <tr>
          <th scope="row">{ele.id}</th>
          <td>{ele.name}</td>
          <td>{ele.username}</td>
          <td>{ele.email}</td>
          <td>{ele.address.street}</td>
          <td>{ele.address.city}</td>
          <td>{ele.address.zipcode}</td>
        </tr>
      ));
    setFilterdData(filteredUsers);
  };

  return (
    <div>
      <div className="container mt-5">
        <label htmlFor="filter" className="mx-2">
          Filter
        </label>
        <input type="text" onChange={filterHandle} />
      </div>
      <Table className="container mt-3 border border-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>City</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {!filter &&
            users.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
              </tr>
            ))}
          {filter && filterdData}
        </tbody>
      </Table>
    </div>
  );
}
