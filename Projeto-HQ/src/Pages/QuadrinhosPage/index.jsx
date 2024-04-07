import "./styleQuadrinhos.css"
import { QuadrinhosLista } from "./components/index"
import { Link } from "react-router-dom";

function QuadrinhosPage() {
    return (
        <>
            <div className="corpoQuadrinhos">
                <div className="tituloQuadrinhos">
                    <h1>
                        Lista de quadrinhos:
                    </h1>
                </div>
                <div className="AreaButtonAddQuadrinho">
                    <Link to={'/addquadrinho'}>
                        <button className="ButtonAddQuadrinho">Adicionar quadrinho</button>
                    </Link>
                </div>
                <div className="listaQuadrinhos">
                    <QuadrinhosLista />
                </div>
            </div>
        </>
    );
}

export default QuadrinhosPage;