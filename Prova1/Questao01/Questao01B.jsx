import {useEffect} from 'react'

function Questao01B({alunos, sendMedia}) {

    useEffect(() => {
        const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2)
        sendMedia(medias)
      }
      , 
      [alunos, sendMedia]
      )
    
    return null

}

export default Questao01B