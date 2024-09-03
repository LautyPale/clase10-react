import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import "./App.css";

export default function App() {

    return (
        <BrowserRouter>
                
            <Routes>
                <Route path="deportivo" element={<Home/>}>
                    <Route path="galeria" element={<Galeria/>} />
                    <Route path="productos" element={<Productos/>} />
                    <Route path="productos/:productoId"></Route>
                    <Route path="*" element={<Error/>} />
                </Route>
            </Routes>

            <footer>Footer</footer>

        </BrowserRouter>
    );
}