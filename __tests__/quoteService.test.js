 const {
  insertQuote: createQuoteRepository,
  getCountQuotes: getCountQuotesRepository,
  getQuoteById: getQuoteByIdRepository,
} = require("../src/database/repositories/quotes")
const { createQuote, getQuoteById, getRandomQuote } = require("../src/services/quotes")
beforeEach(()=>{
  jest.resetAllMocks()
})

jest.mock("../src/database/repositories/quotes")


describe("insertion tests", ()=>{
  
  it("should return a message with the quote id", async ()=>{
    createQuoteRepository.mockResolvedValueOnce([1])
    const result = await createQuote("quote")
    expect(result).toHaveProperty("message")
  })

  it("should fail when send an invalid quote", ()=>{
    createQuoteRepository.mockResolvedValueOnce(null)
    expect(createQuote({invalid: "quote"})).rejects.toThrow('The parameter quote received has not a valid form')
  })


})


describe("get one by id tests", ()=>{
  it("should return an object with id 1", async ()=>{
    getQuoteByIdRepository.mockResolvedValueOnce({id: 1, quote: `McGowan's Madison Avenue Axiom:     If an item is advertised as "under $50", you can bet it's not $19.95.`, vowels: 30, consonants: 38, characters: 8534})
    const received = await getQuoteById(1)
    const expected = {
       "quote": "McGowan's Madison Avenue Axiom:     If an item is advertised as \"under $50\", you can bet it's not $19.95.",
       "isFunny": true,
       "isTheBestJoke": true 
    }
    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
  })
  
  it("should throw as not found when passing an unexistent id", ()=>{
    getQuoteByIdRepository.mockResolvedValueOnce(null)
    expect(getQuoteById(1)).rejects.toThrow("The quote with id : 1 was not found")
  })
})

describe("get random quote tests",  ()=>{
  it("should return a element random", async ()=>{
    getCountQuotesRepository.mockResolvedValueOnce({total_quotes: 1})
    getQuoteByIdRepository.mockResolvedValueOnce({id: 1, quote: `McGowan's Madison Avenue Axiom:     If an item is advertised as "under $50", you can bet it's not $19.95.`, vowels: 30, consonants: 38, characters: 8534})
    const received = await getRandomQuote()
    const expected = {
       "quote": "McGowan's Madison Avenue Axiom:     If an item is advertised as \"under $50\", you can bet it's not $19.95.",
       "isFunny": true,
       "isTheBestJoke": true 
    }
    expect(JSON.stringify((received))).toBe(JSON.stringify(expected))
  }) 

  it("should return a message indicating that there is not any quote available yet", async ()=>{
    getCountQuotesRepository.mockResolvedValueOnce({total_quotes: 0})
    getQuoteByIdRepository.mockResolvedValueOnce(null)
    const expected = {"message": "Not available quotes"}
    const received = await getRandomQuote()
    expect(JSON.stringify(received)).toBe(JSON.stringify(expected))
  })

})
