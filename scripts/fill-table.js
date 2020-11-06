require("dotenv").config()
const axios = require("axios")
const dbConnection = require("../src/database/databaseConfig")
const { separeIntoSingleQuotes } = require("./utils/stringUtils")
const repositoryFactory  = require("../src/database/repositories/quotes")(dbConnection)
const { insertManyQuotes } = repositoryFactory
const { countVowels, countConsonants, sumCharacters} = require("../src/utils/stringUtils")

const composeQuotes = quoteTexts =>{
  const quotes = quoteTexts.map(quoteText => {
    const vowels = countVowels(quoteText)
    const consonants = countConsonants(quoteText)
    const characters = sumCharacters(quoteText)
    return {
      quote: quoteText,
      vowels,
      consonants,
      characters
    }
  })
  return quotes

}

const hasText = (request) =>{
  return request && request.data && request.data.length
}


const createQuotesFromUrl = async (url) =>{
  const request = await axios.get(url)
  const hasTextRequest = hasText(request)
  if(!hasTextRequest) return {message: "this request has no text into data"}
  const quotesTexts = separeIntoSingleQuotes(request.data)
  const quotes = composeQuotes(quotesTexts)
  const quotesInsertedResult = await insertManyQuotes(quotes)
  return {message: `quotes inserted ${quotes.length}`}
}

const main = (async ()=>{
  try{
    console.log("initializing quotes")
    const part1Url = "http://www.textfiles.com/humor/TAGLINES/quotes-1.txt"
    const part2Url = "http://www.textfiles.com/humor/TAGLINES/quotes-2.txt"
    console.log(await createQuotesFromUrl(part1Url))
    console.log(await createQuotesFromUrl(part2Url))
    process.exit(1)
  }catch(error){
    throw error
  }
  
})()

