class QuoteError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = 500
    this.errorCode = 'E-01'
  }
}

class DBError extends Error {
  constructor(action) {
    super(`An error ocurrend on ${action}, verify logs`)
    this.statusCode = 500
    this.errorCode = 'E-02'
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = 404
    this.errorCode = 'E-03'
  }
}

class NotValidParameterError extends Error {
  constructor(message) {
    super(`The parameter ${message} received has not a valid form`)
    this.statusCode = 400
    this.errorCode = 'E-03'
  }
}

module.exports = {
  QuoteError,
  DBError,
  NotFoundError,
  NotValidParameterError,
}
