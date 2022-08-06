import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import { getCharacters } from '../../apiCalls';
import Home from '../Home/Home';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

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
    selected.isHearted = true;
    setFavorites([...favorites, selected])
  } 

  const unFavorite = (selected) => {
    selected.isHearted = false;
    const updateFavorites = favorites.filter((fave) => fave.isHearted)
    setFavorites([...updateFavorites])
  }

  const maintainCharacters = (matchedCharacter) => {
    return characters.find(character => matchedCharacter === character.name)
  }

  return (
    <>
      <Header />
      <main className='app-main'>
        <Switch>
          <Route exact path='/'>
            <Home characters={characters}/>
          </Route>
          <Route exact path='/favorites'>
            <Favorites favorites={favorites} makeFavorite={makeFavorite} unfavorite={unFavorite}/>
          </Route>
          <Route path='/:fullname' render={(match) => {
            let matchedCharacter = match.match.params.fullname;
            let selectedCharacter = maintainCharacters(matchedCharacter);
            return <DetailsCard selectedCharacter={selectedCharacter} makeFavorite={makeFavorite} unfavorite={unFavorite}/>     
          }} />
        </Switch>
      </main>
    </>
  )
}

export default App;