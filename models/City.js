const db = require("../database/connection");

const City = {};

City.all = () => {
  return db.any('SELECT * FROM cities');
}

City.find = code => {
  return db.one("SELECT * FROM cities WHERE city_code = $<code>", { code: code});
};


module.exports = City;
