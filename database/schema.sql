/* CREATE DATABASE travel_db;

-- \c travel_db;*/

DROP TABLE trips;
DROP TABLE cities;

CREATE TABLE cities
(
  city_id SERIAL PRIMARY KEY NOT NULL,
  city_name TEXT,
  city_code CHAR(3)
);

CREATE TABLE trips(
  trip_id SERIAL PRIMARY KEY NOT NULL,
  budget INTEGER NOT NULL,
  departure_date DATE NOT NULL,
  duration INTEGER NOT NULL,
  city_id INTEGER REFERENCES cities(city_id)
);


