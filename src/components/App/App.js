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
  // const [ singleCharacter, setSingleCharacter ] = useState({});

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
    return characters.find(character => { 
      if(event.target.char_id === character.char_id) {
        // console.log("30", character.char_id)
        // console.log("31", event.target.id)
        // setSingleCharacter(character)
        //line above is actually not needed. ask later.
        // console.log("48", character)
        return character
      }
    })
  }

  console.log("54", selectCharacter)

  return (
    // <Switch>
    <>
      <Header />
      <main className='app-main'>
        <Route exact path='/'>
          <Home characters={characters} />
        </Route>
        {/* <Route path={`/${singleCharacter.name}${singleCharacter.char_id}`}> */}
        <Route path='/:fullname' render={(match) => {
          //does match.params take in the value of the "to" property of Link (which is name)
          //match is React Router keyword (an object) that has 4 native properties
        // <Route path={`/details${char_id}`} render={(match) => {
          let matchedCharacter = match.match.params.fullname;
          console.log("70", match)
          console.log("66", matchedCharacter)
          // if(!selectCharacter) {
          //   return "Loading......"
          // }
          return <DetailsCard matchedCharacter={matchedCharacter} characters={characters}/>     
        }} />
      </main>
    </>
    // </Switch>
  )
}

export default App;