import { Link } from "react-router-dom";
function Welcome() {
    return (
        <div>
            <nav>
                <a>logo </a>
                <a>about </a>
                <a>price </a>
                <a>support </a>
            </nav>
            <h1>welcome to IVM this is home link with logo</h1>
            <Link to={"/login"}><button>Get Start</button></Link>
            <h1>about</h1>
            <h1>price plan</h1>
            <h1>support contact page</h1>
            <h3>footer</h3>
        </div>
    )
}

export default Welcome
