import { useState, Fragment } from "react";
import "./clients.css"
import Client from "./Client";
import EditRow from "./EditRow";


function Clients({ clients, setClients, onAdd, currentUser }) {
 
  // add function
  const [errors, setErrors] = useState([]);
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
  });

  function handleChange(e) {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const clientData = { ...formData };
    fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((client) => {
          onAdd(client);
          setFromData({
            name: "",
            email: "",
            phone_number: "",
            address: "",
          });
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  // add //

  //delete
  function handleDeleteClient(id) {
    const updateClients = clients.filter((client) => client.id !== id);
    setClients(updateClients);
  }
  //delete //

  //edit
  const [editID, setEditID] = useState(null);

  function handleEditClients(updateClient) {
    const updateClients = clients.map((client) => {
      if (client.id === updateClient.id) {
        return updateClient;
      } else {
        return client;
      }
    });
    setClients(updateClients);
  }

  function handleEditClick(e, client) {
    e.preventDefault();
    setEditID(client.id);
  }

  const handleCancelClick = () => {
    setEditID(null);
  };
  //edit//

  return (
    <div className="c-div">
      <h3 className="c-h3">Clients</h3>
      <div className="c">
        <table className="c-table">
          <tbody>
            <tr className="c-tr">
              <th className="c-head-r">Name</th>
              <th className="c-head-r">Email</th>
              <th className="c-head-r">Phone Number</th>
              <th className="c-head-r">Address</th>
              <th className="c-head-r">Actions</th>
            </tr>
            <tr>
              <td>
                <input
                  className="c-form"
                  type="text"
                  name="name"
                  placeholder="Fullname"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="c-form"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="c-form"
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="c-form"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </td>
              <td className="c-add">
                <button onClick={handleSubmit} className="c-add-btn">Add New Client</button>
              </td>
            </tr>
            <tr>
              {errors.map((err) => (
                <td key={err}>
                  {err}
                </td>
              ))}
            </tr>
            {clients.map((client) => (
              <Fragment>
                {editID === client.id ? (
                  <EditRow 
                    key={client.id}
                    client={client}
                    onEdit={handleEditClients}
                    setEditID={setEditID}
                    onCancel={handleCancelClick}
                  />
                ) : (
                  <Client
                    key={client.id}
                    client={client}
                    onClick={handleEditClick}
                    onDelete={handleDeleteClient}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        </div>
    </div> 
  );
}

export default Clients;




