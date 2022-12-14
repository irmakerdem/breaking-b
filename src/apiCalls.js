export const getCharacters = () => {
  return fetch('https://breakingbadapi.com/api/characters?category=Breaking+Bad')
    .then(response => {
      if(!response.ok) {
        throw new Error("Oopsies! Something went wrong 🤡")
      } else {
        return response.json()
      }
    })
}