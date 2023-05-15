import { useState } from "react"

const Questao02 = () => {

    const [virar, setVirar] = useState(true) //define o estado inicial como true

    //botao pra virar a imagem
    const acaoBotao = () => {
        setVirar((prev) => !prev)
    }

    //renderizando a imagem e botam virando a imagem
    return (
        <>
            <h1> Questão 2 </h1>
            <img src={virar ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`}/>
            <button onClick = {acaoBotao}> Virar </button>
        </>
    )
}

export default Questao02