
exports.up = function(knex) {
 return knex.schema.createTable("quotes", (table)=>{
    table.increments("id")
    table.string("quote")
    table.integer("vowels")
    table.integer("consonants")
    table.integer("characters")
  })  
};

exports.down = function(knex) {
 return knex.schema.dropTable("quotes") 
};
