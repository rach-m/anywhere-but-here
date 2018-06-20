CREATE DATABASE travel_db;

\c travel_db;

DROP TABLE trips;
DROP TABLE airports;

CREATE TABLE airports
(
  airport_id SERIAL PRIMARY KEY NOT NULL,
  airport_name VARCHAR,
  airport_city VARCHAR,
  airport_country VARCHAR,
  airport_code CHAR(3)
);

CREATE TABLE trips(
  trip_id SERIAL PRIMARY KEY NOT NULL,
  budget INTEGER NOT NULL,
  departure_date DATE NOT NULL,
  duration INTEGER NOT NULL,
  airport_id INTEGER REFERENCES airports(airport_id)
);


