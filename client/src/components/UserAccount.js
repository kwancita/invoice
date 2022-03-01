import { Link } from 'react-router-dom';

function UserAccount({currentUser}) {
  const {name, email, phone_number, address, company, logo} = currentUser
    return (
        <div>
            <img src={logo} alt="" />
            <p>{company}</p>
            <p>{address}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone_number}</p>
            <Link to="/account"><button>✏️</button></Link>
        </div>
    )
}

export default UserAccount
