const db = require('../database/connection');

const Trip = {};

Trip.create = newTrip => {
  return db.one(`INSERT into trips
  (budget, departure_date, duration, city_id)
  VALUES ($<budget>, $<departure_date>, $<duration>, $<city_id>) RETURNING *`, newTrip)
};

Trip.all = () => {
  return db.any('SELECT * FROM trips');
}

// Trip.find = id => {
//   return db.one("SELECT * FROM trips WHERE trip_id = $<id>", { id: id });
// };

Trip.update = UpdateTrip => {
  return db.none(`UPDATE trips SET
    budget = $<budget>,
    departure_date = $<departure_date>,
    duration = $<duration>,
    city_id = $<city_id>`, UpdateTrip);
};

Trip.delete = id => {
  return db.result("DELETE FROM trips WHERE trip_id = $<id>", { id: id });
};

module.exports = Trip;
