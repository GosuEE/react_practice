import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>404 Not Found</h1>
            <b>This is not the web page you are looking for.</b><br />
            <Link to="/">Back to home</Link>
        </>
    )
}

export default NotFound;