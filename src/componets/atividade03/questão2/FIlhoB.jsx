const FilhoB = ({meuVetor, enviarMenor}) => {

    const calcularMenorElemento = () => {
        const menor = Math.min(...meuVetor)
        enviarMenor(menor)
    }

    return(
        <>
            <button onClick = {calcularMenorElemento}>
                Calcular Menor
            </button>
        </>
    )
}

export default FilhoB