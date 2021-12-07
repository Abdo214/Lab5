
const profiles = [ 
  { 
    name: 'Imen' 
  }, 
  { 
    name: 'Aymen' 
  }, 
  { 
    name: 'Feres' 
  }, 
  { 
    name: 'Nadia' 
  }, 
  { 
    name: 'Mohamed' 
  } 
]; 
 
exports.seed = function (knex) { 
  return knex('profiles').del() 
  .then(() => { 
    return knex('profiles').insert(profiles) 
  }) 
};