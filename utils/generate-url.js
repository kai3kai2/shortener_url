function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateUrl(length) {
  // define url have element
  const numbers = '1234567890'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()

  // set collection to store things
  let collection = []
  collection = collection.concat(numbers.split(''))
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))

  // generate random's five element
  let randomUrls = ''
  for (let i = 0; i < length; i++) {
    randomUrls += sample(collection)
  }

  return randomUrls
}

module.exports = generateUrl