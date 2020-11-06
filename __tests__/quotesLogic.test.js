const { isTheBestJoke, isFunny, getRandomQuoteId } = require("../src/helpers/quotesLogic")


describe('is the best joke tests', ()=>{
  it("returns false as verify the quote counter", ()=>{ expect(isTheBestJoke(10,5)).toBe(false)})
  it("returns false as .65 exact as vowel percent", ()=>{expect(isTheBestJoke(100,65)).toBe(false)})
  it("returns true as .66 percent vowel", ()=>{expect(isTheBestJoke(100,66)).toBe(true)})
  it("returns true if we cant find any consonant", ()=>{expect(isTheBestJoke(0,66)).toBe(true)})
})

describe('is funny tests', ()=>{
   it("returns true as char code sum is even", ()=>{expect(isFunny(1600)).toBe(true)})
   it("returns false as char code sum is odd", ()=>{expect(isFunny(1601)).toBe(false)})
})

describe("get random id from a determined size", ()=>{
  it("returns an element between 1 and 500", ()=>{
     const randomId = getRandomQuoteId(500)
     expect(randomId).toBeGreaterThanOrEqual(1)
     expect(randomId).toBeLessThanOrEqual(500)
   })
  it("returns an element between 1 and 1", ()=>{
    const randomId = getRandomQuoteId(1)
    expect(randomId).toBe(1)
  })
  
  it("returns 0 when is not a size > 0", ()=>{expect(getRandomQuoteId(0)).toBe(0)})

})
