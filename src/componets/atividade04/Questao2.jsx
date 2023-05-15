import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const vetor = [
                    {nome: "Ana", ira: 6.8},
                    {nome: "Maria", ira: 7.2},
                    {nome: "Jose", ira: 5.7}
                ]
                const meuInt = Math.floor((Math.random()*10))+1
                if(meuInt === 1) reject({id: 1, msg: "ERRO DE CONEXÃO"})
                else if(meuInt === 2) reject({id: 2, msg: "ERRO DE DADOS"})
                else resolve({id: meuInt, msg: "OK", vetor})
            } //função a executar do timeout
            ,
            3000
        ) //setTimeout
    } //resolve e reject
)

const Questao02 = () => {

    const [meuDados, setMeusDados] = useState([])

    async function promessaAsyncAwait() {
        try {
            const resposta = await minhaPromessa
            setMeusDados(resposta.vetor)
        }
        catch (error) {
            console.log("ID: " + error.id)
            console.log("MSG: " + error.msg)
            alert(error.msg)
        }
    }

    useEffect(
        () => {
            promessaAsyncAwait()
        }
        ,
        []
    )

    return (
        <>
        <h1> Atividade04 - Questão 2 </h1>
        {
            meuDados.map(
                (dado, index) => <h3 key = {index + dado.nome}> {dado.nome} - {dado.ira} </h3>
            )
        }
        </>
    )
}

export default Questao02