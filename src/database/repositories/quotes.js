const knex = require('../databaseConfig')
const tableName = 'quotes'
const { DBError } = require('../../errors/Error')

const getQuoteById = async (id) => {
  try {
    return knex(tableName).where('id', id).first()
  } catch (error) {
    console.error(error)
    throw new DBError('get_element_by_id')
  }
}

const insertQuote = async ({ quote, vowels, consonants, characters }) => {
  try {
    return await knex(tableName).insert({
      quote,
      vowels,
      characters,
      consonants,
    })
  } catch (error) {
    console.error(error)
    throw new DBError('insert_element')
  }
}

const insertManyQuotes = async (quotes) => {
  try {
    return knex(tableName).insert(quotes)
  } catch (error) {
    console.error(error)
    throw new DBError('insert_many_elements')
  }
}

const getCountQuotes = async () => {
  try {
    return knex(tableName).count('id', { as: 'total_quotes' }).first()
  } catch (error) {
    console.error(error)
    throw new DBError('get_count_quotes')
  }
}

module.exports = {
  getQuoteById,
  insertQuote,
  insertManyQuotes,
  getCountQuotes,
}
