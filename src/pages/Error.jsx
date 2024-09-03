import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div>
            <h1>404</h1>
            <p>Pagina no encontrada</p>
            <Link to="/"> Home </Link>
        </div>
    );
}