const isTheBestJoke = (consonants, vowels) => {
  const isEmptyConsonants = consonants === true
  if (isEmptyConsonants) return false
  return vowels / consonants > 0.65
}

const isFunny = (characters) => {
  return characters % 2 === 0
}

const getRandomQuoteId = (quotesSize) => {
  const randomId = Math.floor(Math.random() * (quotesSize - 1) + 1)
  return randomId
}

module.exports = {
  isTheBestJoke,
  isFunny,
  getRandomQuoteId,
}
