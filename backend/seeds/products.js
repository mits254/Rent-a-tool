
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name:'driller',description:"",location:"austin",type:"",price:"30"},
        {name:'mowing',description:"",location:"austin",type:"",price:"200"},
        {name:'hammer',description:"",location:"austin",type:"",price:"5"}
      ]);
    });
};
