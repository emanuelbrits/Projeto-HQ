import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://xldiihwnooczdgiwruqw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZGlpaHdub29jemRnaXdydXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzAyNzUsImV4cCI6MjAyNzkwNjI3NX0.4atGd-LbpXQyEjnAGHQz-YJnqfHqBwmPGqGRjf-TUNU");
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export function VolumesLista({id}) {
    const [Volume, setVolume] = useState([]);

    useEffect(() => {
        getVolume();
    }, []);

    async function getVolume() {
        const { data } = await supabase.from("volume").select().eq('id_quadrinho', id);
        setVolume(data);
    }
    return (
        <>
            <div className="ListaVolumes">
                {Volume.map((volume) => (
                    <Link to={`${volume.link}`} target="_blank" rel="noopener noreferrer" key={volume.titulo} className="cardVolume">
                        <img className="img-capa" src={volume.link_capa} alt="capa" />
                        <div className="numeroVolume">{volume.numero}</div>
                    </Link>
                ))}
            </div>
        </>
    )
}