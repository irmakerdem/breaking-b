import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import { getCharacters } from '../../apiCalls';
import Home from '../Home/Home';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

//hook is only needed if you need state!
const App = () => {
  const [ characters, setCharacters ] = useState([]);
  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(data => {
      data = data.map(char => {
        char.isHearted = false
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
  
  const makeFavorite = (selected) => {
    console.log("35", selected)
    selected.isHearted = true;
    setFavorites([...favorites, selected])
    console.log("37", selected)
  } 

  const maintainCharacters = (matchedCharacter) => {
    return characters.find(character => matchedCharacter === character.name)
  }

  console.log(characters)

  return (
    <>
      <Header />
      <main className='app-main'>
        <Switch>
    {/* switch returns first route that matches instead of rendering all matching routes */}
          <Route exact path='/'>
            <Home characters={characters}/>
          </Route>
          <Route exact path='/favorites'>
            {/* favorites is still considered the same as /:fullname because '/:fullname' makes anything after slash dynamic */}
            <Favorites favorites={favorites} makeFavorite={makeFavorite}/>
          </Route>
          <Route path='/:fullname' render={(match) => {
            //leave the dynamic route at the end of all routes
            //does match.params take in the value of the "to" property of Link (which is name)
            //match is React Router keyword (an object) that has 4 native properties
            let matchedCharacter = match.match.params.fullname;
            let selectedCharacter = maintainCharacters(matchedCharacter);
            return <DetailsCard selectedCharacter={selectedCharacter} makeFavorite={makeFavorite}/>     
          }} />
        </Switch>
      </main>
    </>
  )
}

export default App;