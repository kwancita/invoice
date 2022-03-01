import Navbar from "./Navbar"
import Routing from "./Routing"

function LoggedIn({currentUser, setCurrentUser}) {
    return (
        <div>
            <Navbar setCurrentUser={setCurrentUser}/>
            <Routing currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
    )
}

export default LoggedIn
