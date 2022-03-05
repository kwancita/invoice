import "./editClient.css"
import { useState } from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';

function EditRow({ client, onEdit, onCancel, setEditID }) {
  const [editData, setEditData] = useState({
    name: client.name,
    email: client.email,
    phone_number: client.phone_number,
    address: client.address,
  });

  function handleEdit(updatedClient) {
    onEdit(updatedClient);
  }

  function handleChange(e) {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormEdit(e) {
    e.preventDefault();
    fetch(`/clients/${client.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    })
    .then((r) => r.json()) 
    .then((newEdit)=>{
        handleEdit(newEdit);
        setEditID(null)
    })
}

  return (
    
    <tr>
      <td>
        <input
          className="e-form"
          type="text"
          name="name"
          placeholder="Fullname"
          required="required"
          value={editData.name}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="e-form"
          type="text"
          name="email"
          placeholder="Email"
          required="required"
          value={editData.email}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="e-form"
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          required="required"
          value={editData.phone_number}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="e-form"
          type="text"
          name="address"
          placeholder="Address"
          required="required"
          value={editData.address}
          onChange={handleChange}
        />
      </td>
      <td className="e-action">
        <SaveIcon onClick={handleFormEdit}/>|
        <KeyboardReturnIcon onClick={onCancel}/>
      </td>
    </tr>
  
  );
}

export default EditRow;
