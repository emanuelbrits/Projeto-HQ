import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://xldiihwnooczdgiwruqw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZGlpaHdub29jemRnaXdydXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzAyNzUsImV4cCI6MjAyNzkwNjI3NX0.4atGd-LbpXQyEjnAGHQz-YJnqfHqBwmPGqGRjf-TUNU");
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FaTrashAlt, FaEdit } from "react-icons/fa";

export function QuadrinhosLista() {
    const [Quadrinho, setquadrinho] = useState([]);

    useEffect(() => {
        getquadrinho();
    }, []);

    async function getquadrinho() {
        const { data, error } = await supabase.from("quadrinho").select().order('ano', { ascending: false });
        setquadrinho(data);
    }

    const removeQuadrinho = async (idQuadrinho) => {

        alert('Voce tem certeza que deseja remover esse quadrinho ?')

        const { error } = await supabase
            .from('quadrinho')
            .delete()
            .eq('id', idQuadrinho)

        if (error) {
            if (error.code === '23503') {
                alert('Apague todos volumes do quadrinho antes de o remover')
                return
            }
        }

        alert('Removido')
        window.location.reload(false);

    }

    return (
        <>
            <div className="ListaQuadrinhos">
                {Quadrinho.map((quadrinho) => (
                    <div key={quadrinho.id} className="cardQuadrinho">
                        <div className="AreaBotao">
                            <button className="BotaoEditar"><FaEdit /></button>
                            <button className="BotaoLixeira" onClick={() => removeQuadrinho(quadrinho.id)}><FaTrashAlt /></button>
                        </div>
                        <img className="img-capa" src={quadrinho.link_capa} alt="capa" />
                        <div className="tituloQuadrinho"><h2>{quadrinho.titulo}</h2></div>
                        <div className="AreaBotaoVerQuadrinho">
                            <Link to={`/quadrinhos/${quadrinho.id}`}>
                                <button className="BotaoVerQuadrinho">Ver Quadrinho</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}