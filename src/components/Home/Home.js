import React from 'react';
import './Home.css';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import green from '../../assets/green-fly.png'

const Home = ({ characters }) => {
  window.scroll(0,0);
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
    <>
      <div className='faves'>
        <Link to='/favorites'>
          <ul>
            <li><span>GO TO FAVORITES<img className='mini-fly' src={green}></img></span></li>
          </ul>
        </Link>
      </div>
      <div className='all-characters'>
        {characterCards}
      </div>
    </>
  )
}

Home.propTypes = {
  characters: PropTypes.array
}

export default Home; 
