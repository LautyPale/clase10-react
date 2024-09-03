import { Link } from "react-router-dom";

export default function Galeria() {
    return (
        <div>
            <h1>Galeria</h1>
            <p>Esta es la pagina de Galeria</p>
            <Link to="/"> Home </Link>
            <Link to="/productos"> Product </Link>
        </div>
    );
}