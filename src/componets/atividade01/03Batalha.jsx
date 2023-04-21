const Hero = ({name}) => {
    return(
        <div>
            <h1> Meu nome é: {name} </h1>
            <img
            src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt = "Pikachu"
            style = {{width: "300px"}}
            />
        </div>
    )
}

const Opponent = ({name}) => {
    return(
        <div>
            <h1> Sou o adversário e meu nome é: {name} </h1>
            <img
            src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
            alt = "Eevee"
            style = {{width: "300px"}}
            />
        </div>
    )
}

const Arena = ({name}) => {
    return(
        <div>
            <h1> Arena: {name} </h1>
            <Hero name = "Pikachu" />
            <Opponent name = "Eevee" />
        </div>
    )
}

const World = (props) => {
    return(
        <div>
            {props.children}
        </div>
    )
}

export {Hero, Opponent, Arena, World}

