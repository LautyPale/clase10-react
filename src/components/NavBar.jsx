import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/deportivo">Home</Link>
            <Link to="/deportivo/galeria">Galeria</Link>
            <Link to="/deportivo/productos">Productos</Link>
        </nav>
    );
}