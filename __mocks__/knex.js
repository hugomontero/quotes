module.exports = () => {
  const myKnex = {
  select: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  first: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),  
  then: jest.fn(function (done) {
    done({id: 1, quote: "test", vowels: 1})
  })}

  return jest.fn(()=>myKnex)
}
