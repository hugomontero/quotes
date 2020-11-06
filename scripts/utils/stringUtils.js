const separeIntoSingleQuotes = (quoteFileText) => {
  let quoteFileTextCleaned = quoteFileText.substr(quoteFileText.indexOf("\n"))
  quoteFileTextCleaned = quoteFileTextCleaned.replace(/\n|\t|\r/g, '')
  const quotes = quoteFileTextCleaned.split("*")
  return quotes.map(quote => quote.trim())
}

module.exports = {
   separeIntoSingleQuotes
}
