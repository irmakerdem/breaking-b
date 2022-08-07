import React from 'react';
import './Home.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ characters }) => {
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
      />
    )
  })

  return (
    <section className='home-characters'>
      <Link to='/favorites'>
        <button className='go-favorites'>GO TO FAVORITES</button>
      </Link>
      {characterCards}
    </section>
  )
}

Home.propTypes = {
  characters: PropTypes.array
}

export default Home; 