import Pokecard from "./Pokecard"

const PokeDex = (props) => {
    return (
        <div className='pokedex-deck'>
            <h1>PokeDex</h1>
            {props.cardData.map((card)=>{ return<Pokecard name={card.name} id={card.id} type={card.type} exp={card.base_experience} />})}
        </div>
    )
}

export default PokeDex;