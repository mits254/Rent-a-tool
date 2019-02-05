
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name:'Drill',description:"The DEWALT 20-Volt MAX Lithium-Ion Cordless Brushless Compact Drill Driver. Easy to use. Chargable",location:"austin",type:"",price:"30",image:"https://i.redd.it/4e3a40isjg421.png", user_id:1},
        {name:'Lawn Mower',description:"Troy-Bilt TB230 self-propelled mower features a reliable 159 cc Troy-Bilt OHV engine. Easy to carry.",location:"austin",type:"",price:"200",image:"https://www.crewcutslawncare.com/portals/0/lawn-care-services-lafayette-indiana-.png", user_id:1},
        {name:'Hammer',description:"Steel Hammer has optimal weight distribution for a controlled swing. Its oval shaped strike face makes toe-nailing easy. ",location:"austin",type:"",price:"50",image:"http://pngimg.com/uploads/hammer/hammer_PNG3885.png", user_id:2},
        {name:'Ladder',description:" Werner 6 ft. Fiberglass Step Ladder is durable and strong. It is made from fiberglass and has a 375 lb. duty rating. ",location:"austin",type:"",price:"150",image:"https://images.homedepot-static.com/productImages/2a739d0c-7e12-45ba-85b3-6acf481c9137/svn/werner-step-ladders-fiaa06-64_1000.jpg", user_id:2},
        {name:'Wrench',description:"This tool is a pipe wrench with a chain that is used as your gripping points and is great for pipe caps or similar items. ",location:"austin",type:"",price:"40",image:"https://asrentall.com/wp-content/uploads/2013/02/pipe-wrench.png", user_id:2},
        {name:'Stud Finder',description:"Center Sensor Stud Finder has a detection depth of 1-1/2 in. for wood and metal. ",location:"austin",type:"",price:"30",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUzYBIn8JlTkXOwH_JCjalg-rf_7GxwkN6lsrMvskkuqtvC6O", user_id:2},
      ]);
    });
};
