import { useState } from "react";

function EditUser({ currentUser, setCurrentUser, setEditUser }) {
  const [updatedAccount, setUpdatedAccount] = useState(currentUser);

  function handleUpdate(e, field) {
    setUpdatedAccount({ ...updatedAccount, [field]: e.target.value });
  }

  function handleUpdateAccount(e) {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAccount),
    })
      .then((r) => r.json())
      .then((newEdit) => {
        setCurrentUser(newEdit);
        setEditUser(true);
      });
  }

  return (
    <form onSubmit={handleUpdateAccount}>
      <div className="s-e-div">
        <div className="s-left">
          <img src={updatedAccount.logo} alt="" className="s-logo" />
        </div>
        <div className="s-right s-flex">
          <input
            className="s-input"
            type="text"
            name="logo"
            placeholder="Logo"
            value={updatedAccount.logo}
            onChange={(e) => handleUpdate(e, "logo")}
          />
          <input
            className="s-input"
            type="text"
            name="name"
            placeholder="Fullname"
            value={updatedAccount.name}
            onChange={(e) => handleUpdate(e, "name")}
          />
          <input
            className="s-input"
            type="text"
            name="email"
            placeholder="Email"
            value={updatedAccount.email}
            onChange={(e) => handleUpdate(e, "email")}
          />
          <input
            className="s-input"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={updatedAccount.phone_number}
            onChange={(e) => handleUpdate(e, "phone_number")}
          />
          <input
            className="s-input"
            type="text"
            name="address"
            placeholder="Address"
            value={updatedAccount.address}
            onChange={(e) => handleUpdate(e, "address")}
          />
          <input
            className="s-input"
            type="text"
            name="company"
            placeholder="Company"
            value={updatedAccount.company}
            onChange={(e) => handleUpdate(e, "company")}
          />
          <div className="s-btn-flex">
          <button className="s-e-btn">Cancel</button>
          <button className="s-e-btn" type="submit">Confirm</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditUser;
