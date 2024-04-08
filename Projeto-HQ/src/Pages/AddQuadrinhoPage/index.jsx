import { createClient } from "@supabase/supabase-js";
import "./styleAddQuadrinhoPage.scss"
import { useState } from "react";
const supabase = createClient("https://xldiihwnooczdgiwruqw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZGlpaHdub29jemRnaXdydXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzAyNzUsImV4cCI6MjAyNzkwNjI3NX0.4atGd-LbpXQyEjnAGHQz-YJnqfHqBwmPGqGRjf-TUNU");
import { useNavigate, Link } from "react-router-dom";
import QuadrinhosPage from "../QuadrinhosPage";

function AddQuadrinhoPage() {

  const navigate = useNavigate()

  const [titulo_aux, settitulo_aux] = useState('');
  const [ano_aux, setano_aux] = useState('');
  const [link_capa_aux, setlink_capa_aux] = useState('');
  const [andamento_aux, setandamento_aux] = useState('Em andamento');

  const handleStatusChange = (e) => {
    const { name, value } = e.target;
    setandamento_aux(value);
  };

  const handleAdd = async () => {
    const { data, error } = await supabase
      .from('quadrinho')
      .insert([
        {
          titulo: titulo_aux,
          ano: ano_aux,
          link_capa: link_capa_aux,
          andamento: andamento_aux
        },
      ])
      .select()
  };

  return (
    <>
      <div className="corpoAddQuadrinho">
        <div className="AreaButtonVoltarQuadrinhoPage">
          <Link to={'/quadrinhos'}>
            <button className="ButtonVoltarQuadrinhoPage">Voltar</button>
          </Link>
        </div>
        <form onSubmit={handleAdd}>
          <input placeholder="Título"
            value={titulo_aux}
            onChange={(e) => settitulo_aux(e.target.value)}
            required
          />
          <input type="number" placeholder="Ano" min="1850" max="2024"
            value={ano_aux}
            onChange={(e) => setano_aux(e.target.value)}
            required
          />
          <input placeholder="Link da capa"
            value={link_capa_aux}
            onChange={(e) => setlink_capa_aux(e.target.value)}
            required
          />
          <p>Status:</p>
          <select name="andamento" placeholder='Andamento' onChange={handleStatusChange}>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default AddQuadrinhoPage;
