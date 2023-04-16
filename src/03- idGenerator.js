const ID_LENGTH = 16
const ID_SEPARATOR = '-'
const ID_SECTIONS = 4
const ID_SUBDIVISION = ID_LENGTH / ID_SECTIONS
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
  return CHARACTERS.charAt(randomIndex)
}

function generarId() {
  let id = ''
  for(let i = 0; i < ID_LENGTH; i+= 1){
    const currentCharacter = getRandomCharacter()
  
    if(i > 0 &&i % ID_SUBDIVISION === 0) {
      id += `${ID_SEPARATOR}${currentCharacter}`
    } else {
      id += currentCharacter
    }

  }
  return id
}

const id = generarId()
console.log(id)