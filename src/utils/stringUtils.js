const isAPrhase = (phrase) => phrase && typeof phrase === 'string'

const countVowels = (phrase) => {
  if (!isAPrhase(phrase)) return 0
  const vowelsPhrase = phrase.replace(/[^aeiouAEIOU]/g, '')
  return vowelsPhrase.length
}

const countConsonants = (phrase) => {
  if (!isAPrhase(phrase)) return 0
  const consonantsPhrase = phrase.replace(
    /[^bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/g,
    ''
  )
  return consonantsPhrase.length
}

const sumCharacters = (quotes) => {
  if (!isAPrhase(quotes)) return 0
  let charSum = 0
  for (let char of quotes) {
    charSum += char.charCodeAt(0)
  }
  return charSum
}

module.exports = {
  countVowels,
  countConsonants,
  sumCharacters,
}
