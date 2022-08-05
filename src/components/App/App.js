import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import {getCharacters} from '../../apiCalls';
import Home from '../Home/Home';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
// import Card from '../Card/Card';

//hook is only needed if you need state!
// character is equal to this.state
const App = () => {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(data => {
      data = data.map(char => {
        if(char.img.includes('static')) {
          char.img = char.img.replace('static', 'vignette')
          return char
        } else {
          return char
        }
      })
      return data
    })
    .then(data => {
      setCharacters(...characters, data)
    })
  }, [])

  const selectCharacter = (event) => {
    return characters.find(character => { 
      if(event.target.char_id === character.char_id) {
        // setSingleCharacter(character)
        //line above is actually not needed. ask later.
        return character
      }
    })
  }

  return (
    // <Switch>
    <>
      <Header />
      <main className='app-main'>
        <Route exact path='/'>
          <Home characters={characters} />
        </Route>
        <Route path='/:fullname' render={(match) => {
          //does match.params take in the value of the "to" property of Link (which is name)
          //match is React Router keyword (an object) that has 4 native properties
          let matchedCharacter = match.match.params.fullname;
          return <DetailsCard matchedCharacter={matchedCharacter} characters={characters}/>     
        }} />
      </main>
    </>
    // </Switch>
  )
}

export default App;