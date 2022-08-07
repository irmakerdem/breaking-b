import React from "react";
import themeSong from '../assets/themeSong.mp3'
// import themeSong from '../assets/harry_potter.mp3'

const Soundify = () => {
  const mySound = themeSong;
  const audio = new Audio(mySound);
  const isPlaying = false;

  // const playAudio = () => {
  //   audio.play();
  // }
  
  // const pauseAudio = () => {
  //   audio.pause();
  // }
  
  // {selectedCharacter.isHearted && <button className='full-heart'>💚</button> ? <button className='full-heart' onClick={() => unfavorite(selectedCharacter)}>💚</button> : <button className='empty-heart' onClick={() => makeFavorite(selectedCharacter)}>🤍</button>}
  return (
    // <button onClick={() => {audio.loop = true; audio.play()}}>PLAY theme music</button>
    <button>PLAY theme music</button> ? <button onClick={() => {audio.loop = true; audio.play()}}>PLAY theme music</button> : <button onClick={() => {audio.pause()}}>PAUSE theme music</button>
    // !isPlaying ? <button onClick={() => {audio.loop = true; audio.play()}}>PLAY theme music</button> : <button onClick={() => {audio.pause()}}>PAUSE theme music</button>
    // <audio src={audio} autoPlay controls>SOUNDZ</audio>
    );
};

export default Soundify;