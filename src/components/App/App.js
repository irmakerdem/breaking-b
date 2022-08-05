import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import {getCharacters} from '../../apiCalls';
import Home from '../Home/Home';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';
import { Route } from 'react-router-dom';

//hook is only needed if you need state!
// character is equal to this.state
const App = () => {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(data => {
      setCharacters(...characters, data)
    })
  }, [])

  // console.log("21", characters)

  const selectCharacter = (event) => {
    console.log(event.target)
    //if image is clicked, 
    //look through big array and grab its id (event.tagrte.id)
    //event.target.id === pid
    characters.find(character => { 
      if(event.target.char_id === character.char_id) {
        console.log("30", character.char_id)
        console.log("31", event.target.id)
        return character
      }
    })

    // console.log("24", characters)
  }

  return (
    <main className='App'>
        <h1>Breaking Bad</h1>
    <Route>
      <Home characters={characters} selectCharacter={selectCharacter}/>
    </Route>
        {/* <DetailsCard /> */}
        {/* <Favorites /> */}
      </main>
  )
}

export default App;