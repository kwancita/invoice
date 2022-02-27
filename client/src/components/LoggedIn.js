import Navbar from "./Navbar"
import Routing from "./Routing"

function LoggedIn({currentUser, setCurrentUser}) {
    return (
        <div>
            <Navbar setCurrentUser={setCurrentUser}/>
            <Routing currentUser={currentUser} />
        </div>
    )
}

export default LoggedIn
