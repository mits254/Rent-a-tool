
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:"Sam",token:"sam123",address:"456 northwood blvd",city:"austin",state:"texas",phone:"512789012",},
        {username:"Tom",token:"tom123",address:"789 appleeye st.",city:"austin",state:"texas",phone:"789012345",},
        {username:"Jerry",token:"jerry123",address:"234 southwind valley",city:"austin",state:"texas",phone:"567890123",}
      ]);
    });
};
