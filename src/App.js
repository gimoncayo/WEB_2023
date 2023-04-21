//import MeusDados from "./componets/atividade00/01MeusDados";
//import MeusDados from "./componets/atividade00/02MeusDados";
//import Temperatura from "./componets/atividade00/03Temperatura"
//import Pai from "./componets/atividade01/questao01/01Pai"
//import * as PC from "./componets/atividade01/02MeuPC"
//import * as Batalha from "./componets/atividade01/03Batalha"
import FunctionContextA from "./componets/atividade02/questao1/FunctionContextA"
import ComponenteAvo from "./componets/atividade02/questao3/ComponenteAvo"

//Atividade 0
//01MeusDados
/* function App() {
    return (
      <MeusDados/>
    )
  } */

//02MeusDados e 03Temperatura
/* function App() {
    return (
      <MeusDados 
      nome = "Giovanna Moncayo Nakashima"
      curso = "Sistemas de Informação"
      universidade = "UFC"
      />
      <Temperatura/>
    )
  } */

//Atividade 1
/*function App() {
  return (
    <div>
      <Pai />
      <hr />
      <PC.PlacaDeVideo nome="RTX 3090" preco={10300.99} />
      <PC.PlacaMae nome="Gigabyte" preco={1000.99} />
      <PC.Memoria nome="DDR 4" preco={600.99} />
      <hr />
      <Batalha.World>
        <Batalha.Arena name = "Praça do Leão" />
        <Batalha.Arena name = "Fila do RU" />
      </Batalha.World>
    </div>
  )
}*/

//Atividade 2
function App() {
  return(
    <div>
      <FunctionContextA/>
      <ComponenteAvo/>
    </div>
  )
}

export default App
