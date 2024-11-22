import { useEffect, useState } from "react"
import "./favoritos.css"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        let lista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(lista)|| [])
    },[])

    function ExcluirFilme(id){
        let filtro = filmes.filter((item)=>{
            return (item.id !== id)
        })
        setFilmes(filtro)
        localStorage.setItem("@primeflix", JSON.stringify(filtro))
        toast.success("Filme removido")
    }



    return(
        <div className="meus-filmes">
            <h1 >Meus filmes</h1>

            {filmes.length===0 && <span>Você não possui filmes salvos :(</span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=>ExcluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}