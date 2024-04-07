import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useParams } from 'react-router-dom'
import "./styleQuadrinho.css"
import { VolumesLista } from "./components";
import { Link } from "react-router-dom";

const supabase = createClient("https://xldiihwnooczdgiwruqw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZGlpaHdub29jemRnaXdydXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzAyNzUsImV4cCI6MjAyNzkwNjI3NX0.4atGd-LbpXQyEjnAGHQz-YJnqfHqBwmPGqGRjf-TUNU");

function QuadrinhoPage() {

    let { id } = useParams()
    const [Quadrinho, setquadrinho] = useState([]);

    useEffect(() => {
        getquadrinho();
    }, []);

    async function getquadrinho() {
        const { data } = await supabase.from("quadrinho").select().eq('id', id);
        setquadrinho(data[0]);
    }

    return (
        <>
            <div className="corpoQuadrinhos">
                <div className="AreaButtonVoltar">
                    <Link to={'/quadrinhos'}>
                        <button className="ButtonVoltar">Voltar</button>
                    </Link>
                </div>
                <div className="tituloQuadrinho">
                    <h1>
                        {Quadrinho.titulo}
                    </h1>
                </div>
                <div className="dadosQuadrinho">
                    <div className="capaDados">
                        <img src={Quadrinho.link_capa} alt="" />
                    </div>
                    <div className="ano_andamentoDados">
                        <div className="anoDados">
                            <h1>Ano de lançamento: {Quadrinho.ano}</h1>
                        </div>
                        <div className="andamentoDados">
                            <h1>Status: {Quadrinho.andamento}</h1>
                        </div>
                    </div>
                </div>
                <div className="tituloVolumes">
                    <h1>Volumes:</h1>
                </div>
                <div className="listaVolumes">
                    <VolumesLista id={id} />
                </div>
            </div>
        </>
    );
}

export default QuadrinhoPage;