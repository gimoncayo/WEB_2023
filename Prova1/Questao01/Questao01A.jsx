import {useState} from "react"
import Questao01B from "./Questao01B"

const Questao01A = () => {

    const [medias, setMedias] = useState(0)

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Sicrano", notas: {ap1: 7.3, ap2: 9.2} }
    ]

    const enviarMedias = (NewMedias) => {
        setMedias(NewMedias);
      };

    const alunosAprovados = alunos.filter((aluno, index) => medias[index] >= 6.0);

    return (
        <>
          <h1> Questao 1 </h1>
          <Questao01B alunos={alunos} sendMedia = {enviarMedias}/>
          <h2>Alunos Aprovados:</h2>
          <>
            {alunosAprovados.map((aluno) => (
              <li key={aluno.nome}>{aluno.nome}</li>
            ))}
          </>
        </>
      )

}

export default Questao01A

