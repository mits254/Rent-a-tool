
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name:'driller',description:"",location:"austin",type:"",price:"30",image:"https://i.redd.it/4e3a40isjg421.png", user_id:1},
        {name:'mowing',description:"",location:"austin",type:"",price:"200",image:"https://www.crewcutslawncare.com/portals/0/lawn-care-services-lafayette-indiana-.png", user_id:1},
        {name:'hammer',description:"",location:"austin",type:"",price:"5",image:"http://pngimg.com/uploads/hammer/hammer_PNG3885.png", user_id:2}
      ]);
    });
};
