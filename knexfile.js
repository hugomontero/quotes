// Update with your config settings.
require("dotenv").config()
const { ENVIRONMENT : {database: {database, host, user, password}}} = require("./src/config/constants")
module.exports = {
  development: {
    client: 'mysql',
    connection: {host,database,user,password, database},
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/__migrations__'
    }
  }

};
