import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://xldiihwnooczdgiwruqw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZGlpaHdub29jemRnaXdydXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzAyNzUsImV4cCI6MjAyNzkwNjI3NX0.4atGd-LbpXQyEjnAGHQz-YJnqfHqBwmPGqGRjf-TUNU");
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export function QuadrinhosLista() {
    const [Quadrinho, setquadrinho] = useState([]);

    useEffect(() => {
        getquadrinho();
    }, []);

    async function getquadrinho() {
        const { data } = await supabase.from("quadrinho").select().order('ano', {ascending: false});
        setquadrinho(data);
    }
    return (
        <>
            <div className="ListaQuadrinhos">
                {Quadrinho.map((quadrinho) => (
                    <Link to={`/quadrinhos/${quadrinho.id}`} key={quadrinho.titulo} className="cardQuadrinho">
                        <img className="img-capa" src={quadrinho.link_capa} alt="capa" />
                        <div className="tituloQuadrinho">{quadrinho.titulo}</div>
                    </Link>
                ))}
            </div>
        </>
    )
}