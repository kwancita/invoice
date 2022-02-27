import { Link  } from "react-router-dom";

function Home({currentUser}) {
    return (
        <div>
            <h1>{currentUser.username}</h1>
            <Link to="/clients">Create Client</Link>
            <Link to="/invoicers">Create InVoice</Link>
        </div>
    )
}

export default Home
