import { useNavigate, Link  } from "react-router-dom";

function Navbar({setCurrentUser}) {
    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE'
        })
        navigate('/')
        setCurrentUser(null)
      }

    return (
        <nav>
            <div>
                <Link to="/home">Toddler Dev</Link>
                <Link to="/home">Home</Link>
                <Link to="/clients">Clients</Link>
                <Link to="/invoicers">Invoices</Link>
                <Link to="/me">User</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
            </div>
        </nav>
    )
}

export default Navbar