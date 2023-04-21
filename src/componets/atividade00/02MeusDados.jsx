import "./style.css"

const MeusDados = ({nome, curso, universidade}) => {
    return (
        <div>
            <h1 className="style"> {nome} </h1>
            <h1 className="style"> {curso} </h1>
            <h1 className="style"> {universidade} </h1>
        </div>
    )
}

export default MeusDados