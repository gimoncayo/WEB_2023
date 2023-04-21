import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {

    const cores = {bkgA:"blue", bkgB:"purple", bkgC:"pink", bkgD:"red"}

    return (
        <ColorTheme.Provider value = {cores}>
            <h1 style = {{backgroundColor: cores.bkgA}}> 
            Contexto A 
            </h1>
            <FunctionContextB />
            <FunctionContextC />
        </ColorTheme.Provider>
    )
}

export default FunctionContextA