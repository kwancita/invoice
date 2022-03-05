import './navbar.css'
import { useNavigate, Link  } from "react-router-dom";

function Navbar({setCurrentUser, currentUser}) {
    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE'
        })
        navigate('/')
        setCurrentUser(null)
      }

    return (
        <nav className="n-nav">
            <div className="n-link">
                    <Link to="/clients" className="n-btn logo">IVM</Link>
                    <Link to="/me" className="n-btn icon">Hello, {currentUser.username}</Link>
                    <Link to="/me"><img src={currentUser.logo} alt="" className="logoImg"/></Link>
                    <Link to="/clients" className="n-btn icon">home</Link>
                    <Link to="/" className="n-btn icon" onClick={handleLogout}>Logout</Link>
            </div>
        </nav>
    )
}

export default Navbar