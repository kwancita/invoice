import { useState } from "react";
import EditUser from "./EditUser";
import ShowAccount from "./ShowAccount";

function UserAccount({ currentUser, setCurrentUser }) {
  const [editUser, setEditUser] = useState(true);

  function handleEditClick() {
    setEditUser(!editUser);
  }

  function handleCancelClick() {
    setEditUser(true);
  }

  return (
    <div className="c-div">
      {editUser ? (
        <ShowAccount 
         currentUser={currentUser} 
         onClick={handleEditClick} />
      ) : (
        <EditUser
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          onCancel={handleCancelClick}
          setEditUser={setEditUser}
        />
      )}
    </div>
  );
}

export default UserAccount;
