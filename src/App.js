import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';

const App = () => {

  // state keeps track of the pokemon
  const [pokemon, setPokemon] = useState([]);
  // state tracks the current page user is on and sets first page as default
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  // state tracks the next page user will be on when user clicks next button
  const [nextPageUrl, setnextPageUrl] = useState();
  // state tracks the previous page user was on and will be on when user clicks previous button
  const [previousPageUrl, setPreviousPageUrl] = useState();
  // set state for loading time it takes for the api to retreive and display the Pokemon data, set default to true (is loading) 
  const [loading, setLoading] = useState(true);

  

  // axios API request to retreive the pokemon's names that are on the page depending on what page the currentPageUrl state is set to
  useEffect(() => {
    // sets loading state to true everytime the api request is made
    setLoading(true);

    // cancel variable declared 
    let cancel;

    // data is retrieved 
    axios.get(currentPageUrl, {
      // c variable can call c.cancle to cancel a request
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res =>{
      // set state of loading to false since data will be retreived and will no longer be loading
      setLoading(false);

      // state sets the url for the next button
      setnextPageUrl(res.data.next);

      // state sets the url for the previous button
      setnextPageUrl(res.data.previous);

      // loops through the retreived the names of the pokemon from pokeAPi using a map function
      setPokemon(res.data.results.map(p => p.name));
    });

    // cancels the old request every time a new one is made so no old data is loaded during new requests
    return () => {
      cancel();
    }
  }, [currentPageUrl]);

  // checks if loading and notifies the user whether or not it is
  if(loading){
    return 'Loading...';
  }

  

  return (
    <>
    {/* displays the PokemonList Component */}
      <PokemonList pokemon={pokemon} />
    </>
  );
}

export default App;
