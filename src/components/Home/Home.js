import React from 'react';
import './Home.css';
import Card from '../Card/Card';

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
      <div className='home-card-container'>
        {characterCards}
      </div>
    </>
  )
}

export default Home; 