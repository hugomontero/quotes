const { NotFoundError, NotValidParameterError } = require('../errors/Error')
const {
  insertQuote: createQuoteRepository,
  getCountQuotes: getCountQuotesRepository,
  getQuoteById: getQuoteByIdRepository,
} = require('../database/repositories/quotes')
const {
  countVowels,
  countConsonants,
  sumCharacters,
} = require('../utils/stringUtils')
const {
  getRandomQuoteId,
  isFunny,
  isTheBestJoke,
} = require('../helpers/quotesLogic')

const getRandomQuote = async () => {
  const countElements = await getCountQuotesRepository()
  if (!countElements.total_quotes) return { message: 'Not available quotes' }
  const quoteId = getRandomQuoteId(countElements.total_quotes)
  return getQuoteById(quoteId)
}

const createQuote = async (quote) => {
  const isValidQuote = quote && quote.length && typeof quote === 'string'
  if (!isValidQuote) throw new NotValidParameterError('quote')
  const vowels = countVowels(quote)
  const consonants = countConsonants(quote)
  const characters = sumCharacters(quote)
  const quoteId = await createQuoteRepository({
    quote,
    vowels,
    consonants,
    characters,
  })
  return { message: `A new element was created with id ${quoteId[0]}` }
}

const getQuoteById = async (id) => {
  const quote = await getQuoteByIdRepository(id)
  if (!quote) throw new NotFoundError(`The quote with id : ${id} was not found`)
  return {
    quote: quote.quote,
    isFunny: isFunny(quote.characters),
    isTheBestJoke: isTheBestJoke(quote.consonants, quote.vowels),
  }
}

module.exports = {
  getRandomQuote,
  createQuote,
  getQuoteById,
}
