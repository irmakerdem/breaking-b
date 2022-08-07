import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { getCharacters } from '../../apiCalls';
import Home from '../Home/Home';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Error from '../Error/Error';
// import Soundify from '../Soundify';
// import myThemeSong from '../assets/themeSong.mp3'

const App = ({}) => {
  const EXTERNAL_AUDIO = 'src/assets/BB.wav';
  const soundFile = EXTERNAL_AUDIO
  // const [isPlay, setIsPlay] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(new Audio(soundFile));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  }

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  }

  const [ characters, setCharacters ] = useState([]);
  const [ favorites, setFavorites ] = useState([]);


  useEffect(() => {
    getCharacters()
    .then(data => {
      data = data.map(char => {
        char.isHearted = false;
        if(char.img.includes('static')) {
          char.img = char.img.replace('static', 'vignette');
          return char;
        } else {
          return char;
        }
      })
      return data;
    })
    .then(data => {
      setCharacters(...characters, data);
    })
  }, [])
  
  const makeFavorite = (selected) => {
    selected.isHearted = true;
    setFavorites([...favorites, selected]);
  } 

  const unFavorite = (selected) => {
    selected.isHearted = false;
    const updateFavorites = favorites.filter((fave) => fave.isHearted);
    setFavorites([...updateFavorites]);
  }

  const maintainCharacters = (matchedCharacter) => {
    return characters.find(character => matchedCharacter === character.name);
  }

  // const myPlayer = {myThemeSong}

  return (
    <>
      <Header />
      {/* <Soundify /> */}
      {/* <div>
        <audio src={myPlayer} autoPlay controls>SOUNDZ</audio>
      </div> */}
      <button onClick={playing ? pause : play}>
        {/* {playing ? <FaPause /> : <FaPlay />} */}
      </button>
      <main className='app-main'>
        <Switch>
          <Route exact path='/'>
            <Home characters={characters}/>
          </Route>
          <Route exact path='/favorites'>
            <Favorites favorites={favorites}/> 
          </Route>
          <Route path='/details/:fullname' render={(match) => {
            let matchedCharacter = match.match.params.fullname;
            let selectedCharacter = maintainCharacters(matchedCharacter);
            if(!selectedCharacter) {
              return 'Loading...⏳'
            }
            return <DetailsCard selectedCharacter={selectedCharacter} makeFavorite={makeFavorite} unfavorite={unFavorite}/>     
          }} 
          />
          <Route path='*' render={()=> <Error />}/>
        </Switch>
      </main>
    </>
  )
}

export default App;