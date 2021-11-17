const Pokecard = (props) => {
    return (
        <div className="pokecard-card">
            <h2>{props.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
            <p>Type: {props.type}</p>
            <p>Exp: {props.exp}</p>
        </div>
    )
}


export default Pokecard;