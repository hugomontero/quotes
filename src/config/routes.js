const {
  getRandomQuote,
  createQuote,
  getQuoteById,
} = require('../services/quotes')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    let quote = await getRandomQuote()
    res.send(quote)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let { quote } = req.body
    res.status(201).send(await createQuote(quote))
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let id = req.params['id']
    res.send(await getQuoteById(id))
  } catch (error) {
    next(error)
  }
})

module.exports = router
