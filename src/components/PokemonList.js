import React from 'react';

const PokemonList = ({ pokemon }) => {
    return (
        <div>
            {/* loops through the list of pokemon and displays them */}
            {pokemon.map(p => (
                <div key={p}>
                    {p}
                </div>
            ))}
            
        </div>
    )
}

export default PokemonList;
