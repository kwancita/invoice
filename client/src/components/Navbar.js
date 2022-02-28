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
                <Link to="/clients">logoWord </Link>
                <Link to="/me">UserLOGO </Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
            </div>
        </nav>
    )
}

export default Navbar