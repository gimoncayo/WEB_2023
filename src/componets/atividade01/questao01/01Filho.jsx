const Filho = ({peso, altura}) => {

    const IMC = (peso, altura) => peso / (altura * altura)

    const verificarIMC = (IMC) => {
        if (IMC < 18){
            Return (<h3> Abaixo do peso </h3>)
        } else if (IMC > 25) {
            return (<h3> Acima do peso </h3>)
        } else {
            return (<h3> Peso ideal </h3>)
        }
    }

    return(
        <div>
            <h1>
                Meu IMC é: {IMC(peso, altura)}
                {verificarIMC(IMC(peso, altura))}
            </h1>
        </div>
    )
}

export default Filho