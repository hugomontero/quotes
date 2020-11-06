require('dotenv').config()
const {
  ENVIRONMENT: { port },
} = require('./config/constants')
const express = require('express')
const bodyParser = require('body-parser')
const quotesRoutes = require('./config/routes')
const { errorHandler } = require('./config/middlewares/errorHandler')

const jsonParser = bodyParser.json()

const app = express()
app.use(jsonParser)
app.use('/api/v1/quotes', quotesRoutes)
app.use(errorHandler)
app.listen(port)
