import "./styleQuadrinhos.css"
import { QuadrinhosLista } from "./components/index"

function QuadrinhosPage() {
    return (
        <>
            <div className="corpoQuadrinhos">
                <div className="tituloQuadrinhos">
                    <h1>
                        Lista de quadrinhos:
                    </h1>
                </div>
                <div className="listaQuadrinhos">
                    <QuadrinhosLista />
                </div>
            </div>
        </>
    );
}

export default QuadrinhosPage;