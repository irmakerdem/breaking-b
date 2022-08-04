export const getCharacters = () => {
  return fetch('https://breakingbadapi.com/api/characters')
  //NEED ONLY BB CHARACTERS NOT BETTER CALL SAUL
  //if "category": "Better Call Saul" then do not render
    .then(response => {
      if(!response.ok) {
        throw new Error("Oopsies! Something went wrong 🤡")
      } else {
        return response.json()
      }
    })
}