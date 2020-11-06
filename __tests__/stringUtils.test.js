const { countVowels, countConsonants, sumCharacters} = require("../src/utils/stringUtils")

describe("vowel count test", ()=>{
  it('returns 0 as count value', ()=>{expect(countVowels("")).toBe(0)})
  it('returns 0 as count value', ()=>{expect(countVowels(null)).toBe(0)})
  it('returns 0 as count value', ()=>{expect(countVowels("xcnmytr78182623ˆ77ˆˆ&&812192")).toBe(0)})
  it('returns 5 as count value', ()=>{expect(countVowels('axndmwe84719u123imno')).toBe(5)})
})


describe('consonants count test', ()=>{
  it('returns 0 as count value', ()=>{expect(countConsonants("")).toBe(0)})
  it('returns 0 as count value', ()=>{expect(countConsonants(null)).toBe(0)})
  it('returns 0 as count value', ()=>{expect(countConsonants("aeiou123784239/")).toBe(0)})
  it('returns 0 as count value', ()=>{expect(countConsonants("aeiou123784239/ejkly")).toBe(4)})
})

describe("sum characters of a phrase", ()=>{
  it('returns 0 as count value', ()=>{expect(sumCharacters("")).toBe(0)})
  it('returns 0 as count value', ()=>{expect(sumCharacters(null)).toBe(0)})
  it('returns 0 as count value', ()=>{expect(sumCharacters("aeiou123784239/")).toBe(1049)})
  it('returns 0 as count value', ()=>{expect(sumCharacters("aeiou123784239/ejkly")).toBe(1592)})
})
