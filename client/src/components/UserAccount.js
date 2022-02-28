import { useState } from "react"
import EditUser from "./EditUser"


function UserAccount({currentUser}) {
  const {name, email, phone_number, address, company, logo} = currentUser
  const [edit, setEdit] = useState(false)
    return (
        <div>
            <img src={logo} alt="" />
            <p>{company}</p>
            <p>{address}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone_number}</p>
            <button className="b-button" onClick={()=>{setEdit(true)}}>✏️</button>
            {edit && <EditUser setEdit={setEdit} currentUser={currentUser} />}
        </div>
    )
}

export default UserAccount
