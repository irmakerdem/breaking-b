import React from 'react';
import './Home.css';
import Card from '../Card/Card';

const Home = ({ characters }) => {
  const characterCards = characters.map(character => {
    // let something = character.img.split('/')[2].split('.')
    // if(character.img === "https://static.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605") {
    //   character.img = "https://vignette.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605"
    // }

    // if(character.img.includes('static')) {
    //   let something2 = character.img.replace('static', 'vignette')
    //   // newCard.img
    //   // something[0] = 'vignette'
    //   // console.log("12", something)
    // }
    
    // let newWord = "dog.cat.fishy"
    // let another = newWord.replace('cat', 'bird')
    // console.log(another)
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
      <div>
        {characterCards}
      </div>
    </>
  )
}

export default Home; 