import {useState} from "react"
import Questao01B from "./Questao01B"

const Questao01A = () => {
    
    //declara uma variável de estado medias e permite atualizar o valor do estado
    const [medias, setMedias] = useState(0)

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Sicrano", notas: {ap1: 7.3, ap2: 9.2} }
    ]
    
    //atualiza o estado medias com um novo valor recebido como parâmetro
    const enviarMedias = (NewMedias) => {
        setMedias(NewMedias);
      };
    
    //filtragem para imprimir apenas os alunos aprovados
    const alunosAprovados = alunos.filter((aluno, index) => medias[index] >= 6.0);

    return (
        <>
          <h1> Questao 1 </h1>
          <Questao01B alunos={alunos} sendMedia = {enviarMedias}/>
          <h2>Alunos Aprovados:</h2>
          <>
              //renderização da lista de alunos aprovados
            {alunosAprovados.map((aluno) => (
              <li key={aluno.nome}>{aluno.nome}</li>
            ))}
          </>
        </>
      )

}

export default Questao01A

