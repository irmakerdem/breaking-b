import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import { getCharacters } from '../../apiCalls';

const App = () => {
  const [ characters, setCharacters ] = useState([]);
  //characters is the variable
  //setCharacters is the method that manipulates characters varibale
  //useState is the hook that sets the initial value of characters variable

  useEffect(() => {
    //method that runs an anonymous fcn that has an empty dependency array
    //if you have an API and instead of pulling all the data, you can add a dependency of the array of the selection instead of empty
    //syntax for empty useEffect is: useEffect(() => {}, [])
    console.log("16", characters)
    getCharacters()
    .then(data => {
      console.log("20", data)
      //spread operator opens up characters (which is an empty array)
      //spread operator is needed because it does NOT manipulate state
      //comma means adds the following after it
      setCharacters([...characters, data])
    })
    console.log("25", characters)
  //empty dependency array
  }, [])
  console.log("29", characters)

  //select a state before api call is made
  //you need to select state in Form

  return (
    <main className='App'>
      <h1>Breaking Bad</h1>
    </main>
  )
}

export default App;