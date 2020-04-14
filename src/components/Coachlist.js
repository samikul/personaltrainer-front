import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export default function Trainer() {

  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(responseData => {
        setListItems(responseData.data)
      })
      .catch(err => console.error(err))
  }, [])

  const itemRows = listItems.map((person) =>
    <tr key={person.id}>
      <td>{person.first_name} {person.last_name}</td>
      <td>{person.email}</td>
      <td><img src={person.avatar}  alt="coach" /></td>
    </tr>
  )

  return (
    <div>
      <h2>Persons</h2>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>Coach</th>
            <th>Email</th>
            <th> </th>
          </tr>
          {itemRows}
        </thead>
      </Table>

    </div>
  );
}