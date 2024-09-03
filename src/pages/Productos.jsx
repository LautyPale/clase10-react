import { Link } from "react-router-dom";
import productos from "../data.js"

export default function Productos() {

    console.log(productos);

    <main>
        <h1>Productos</h1>
        <div>
            {productos.map((producto)=>{
                return(
                    <article key={producto.id}>
                        <h4>{producto.title}</h4>
                        <img src={producto.image} />
                        <Link>Mas Info</Link>
                    </article>
                )
            })}
        </div>
    </main>
    
}
