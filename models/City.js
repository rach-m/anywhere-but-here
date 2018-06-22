const db = require("../database/connection");

const City = {};

City.all = () => {
  return db.any('SELECT * FROM cities');
}

City.find = id => {
  return db.one("SELECT * FROM cities WHERE city_id = $<id>", { id: id });
};


module.exports = City;
