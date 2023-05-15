const FilhoA = ({meuVetor, enviarMaior}) => {

    const calcularMaiorElemento = () => {
        const maior = Math.max(...meuVetor)
        enviarMaior(maior)
    }

    return(
        <>
            <button onClick = {calcularMaiorElemento}>
                Calcular Maior
            </button>
        </>
    )
}

export default FilhoA