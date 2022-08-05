import React from 'react';
import './Home.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Home = ({ characters, selectCharacter }) => {
  const characterCards = characters.map(character => {

    return (
      <Card
        img={character.img}
        name={character.name}
        nickname={character.nickname}
        occupation={character.occupation}
        status={character.status}
        portrayed={character.portrayed}
        key={character.char_id}
        id={character.char_id}
        selectCharacter={selectCharacter}
      />
    )
  })

  return (
    <>
      <Link to='/favorites'>
        <button className='go-favorites'>GO TO FAVORITES</button>
      </Link>
      {characterCards}
    </>
  )
}

export default Home; 