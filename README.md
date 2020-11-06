
# quotes api
Quotes services that contains 3 endpoints in order to add new quotes, retrieve random quotes and get a specific quote by their id

# How To Use
in order to use it please first install the required dependencies running the follow command
`npm install --prod`

After that you can use the program using the follow commnand in order to start the server
`node src/index.js`

# API
In order to test the api you can use the follow endpoints

### Get Random element
GET /api/v1/quotes
Example of response: 
```
{
    "quote": "McGowan's Madison Avenue Axiom:     If an item is advertised as \"under $50\", you can bet it's not $19.95.",
    "isFunny": true,
    "isTheBestJoke": true
}
```

### Get Element by id
GET /api/v1/quotes/1
Example of response: 
```
{
    "quote": "McGowan's Madison Avenue Axiom:     If an item is advertised as \"under $50\", you can bet it's not $19.95.",
    "isFunny": true,
    "isTheBestJoke": true
}
```

### Create a new Element
POST /api/v1/quotes
Example of request: 
```
{
    "quote": "this is my quote"
}
```

# HOW TO TEST IT
Into the repository you can find a file directory called 'tests', so they was developed with jest.
In order to run it, you need first install the whole dependencies running the follow command:
`npm install`
and then run:
`npm run test`

# Other dependencies
The code is monitoring with eslint, prettier and commitlint (using convetional-commit as standar)  in order to mantain the same code standard, so if you need to make some changes, consider the fact that, before the commit execution the system will run an eslint inspection, prettier formmat and also verify if the format of the commit content follows the conventional commit standards.

# Other information
In order to deploy the service you must need a database and execute the migrations in order to generate the required tables, also you going to need execute the script that generates the catalog of quotes that you can read with this service

### Environment variables
```
DB_HOST:
DB_PORT:
DB_DATABASE:
DB_USER:
DB_PASSWORD:
```

### Executing migrations
```
npm install
node_modules/.bin/knex migrate:latest
```

### Populate table
```
node scripts/fill-table.js
```

