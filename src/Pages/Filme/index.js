import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./filme.css";

export default function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "eba45982107db6a59d137d00d06d29de",
            language: "pt-BR",
          },
        })
        .then((resp) => {
          setFilme(resp.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilme();
  }, [id, navigate]);

  function SalvarFilme(){
    const lista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(lista)|| []

    const resFilme = filmesSalvos.some((filmeSalvo)=>filmeSalvo.id === filme.id)

    if(resFilme){
        toast.warning("Filme já está na sua lista")
        return
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
    toast.success("Filme salvo com sucesso")
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)}/10</strong>

      <div className="area-botao">
        <button onClick={SalvarFilme}>Salvar</button>
        <button>
          <a
            rel="noreferrer"
            target="blank"
            href={`https://www.youtube.com/results?search_query=${filme.title}`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
