import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import {getCharacters} from '../../apiCalls';
import Home from '../Home/Home';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
// import Card from '../Card/Card';

//hook is only needed if you need state!
// character is equal to this.state
const App = () => {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(data => {
      data = data.map(thing => {
        // console.log(thing.img)
        if(thing.img.includes('static')) {
          thing.img = thing.img.replace('static', 'vignette')
          return thing
        } else {
          return thing
        }
      })
      console.log("29", data)
      return data
    })
    .then(data => {
      setCharacters(...characters, data)
    })
  }, [])

  // console.log("37", characters)

  const selectCharacter = (event) => {
    // console.log(event.target)
    characters.find(character => { 
      if(event.target.char_id === character.char_id) {
        // console.log("30", character.char_id)
        // console.log("31", event.target.id)
        return character
      }
    })
  }

  return (
    <>
      <Header />
      <main className='app-main'>
        <Route path='/'>
          <Home characters={characters} selectCharacter={selectCharacter} />
        </Route>
        {/* <DetailsCard /> */}
        {/* <Favorites /> */}
      </main>
    </>
  )
}

export default App;