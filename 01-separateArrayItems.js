const startingValues = {numbers:[], letters: [], highest: 0}

const testArray = [ 'a', 10, 'b', 'hola', 122, 15,]

function updateValue(currentStash, toUpdate) {
  return {...currentStash, ...toUpdate}
}

function separateArrayItems(array) {
  const separatedData = array.reduce((acc, curr) => {
    if(typeof curr === 'string') {
      const valuesToUpdate = {letters: [...acc.letters,curr]} 
      const updatedValue = updateValue(acc, valuesToUpdate)
      return updatedValue
    }else if(curr > acc.highest) {
      const valuesToUpdate = {numbers: [...acc.numbers,curr], highest: curr} 
      const updatedValue = updateValue(acc, valuesToUpdate)
      return updatedValue
    }else {
      const valuesToUpdate = {numbers: [...acc.numbers,curr]} 
      const updatedValue = updateValue(acc, valuesToUpdate)
      return updatedValue
  }
  },startingValues)
  return separatedData
}

console.log(separateArrayItems(testArray))