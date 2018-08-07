const database = require("./database-connection");

module.exports = {
    list(){
      return database('coffeetype');
    },
    read(id){
      return database('coffeetype').where('id', id).first();
    },
    create(coffee){
      return database('coffeetype').insert(coffee).returning('*').then(record => record[0]);
    },
    update(id, coffee){
      return database('coffeetype').where('id', id).update(coffee).returning('*').then(record => record[0]);
    },
    delete(id){
      return database('coffeetype').where('id', id).del();
    }
};
