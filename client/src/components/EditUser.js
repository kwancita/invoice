import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom';

function EditUser({currentUser}) {
    const [updatedAccount, setUpdatedAccount] = useState(currentUser);
    const [accountUpdatedNote, setAccountUpdatedNote] = useState('');
    const navigate = useNavigate();

    function handleUpdate(e, field) {
        setUpdatedAccount({...updatedAccount, [field]: e.target.value})
    };

    function handleUpdateAccount(e) {
        e.preventDefault();
        fetch(`/users/${currentUser.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedAccount),
        })
        .then(() => {
          navigate('/me', {replace: true})
        })
        setAccountUpdatedNote('Account updates saved.')
    };

    return (
        <div>
            <form onSubmit={handleUpdateAccount}>
                <input 
                    className=""
                    type="text"
                    name="logo"
                    placeholder="Logo"
                    value={updatedAccount.logo}
                    onChange={(e) => handleUpdate(e, 'logo')}
                />
            <input 
                    className=""
                    type="text"
                    name="name"
                    placeholder="Fullname"
                    value={updatedAccount.name}
                    onChange={(e) => handleUpdate(e, 'name')}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={updatedAccount.email}
                    onChange={(e) => handleUpdate(e, 'email')}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={updatedAccount.phone_number}
                    onChange={(e) => handleUpdate(e, 'phone_number')}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={updatedAccount.address}
                    onChange={(e) => handleUpdate(e, 'address')}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={updatedAccount.company}
                    onChange={(e) => handleUpdate(e, 'company')}
                />
                <button>Cancel</button>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default EditUser
