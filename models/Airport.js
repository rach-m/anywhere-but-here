const db = require("../database/connection");

const Airport = {};

// Airport.create = newairport => {
//   return db.one(`INSERT into airports
//   (budget, departure_date, duration, airport_id)
//   VALUES ($<budget>, $<departure_date>, $<duration>, $<airport_id>) RETURNING *`, newairport)
// };

// Airport.all = () => {
//   return db.any('SELECT * FROM airports');
// }

Airport.find = id => {
  return db.one("SELECT * FROM airports WHERE airport_id = $<id>", { id: id });
};


module.exports = Airport;
