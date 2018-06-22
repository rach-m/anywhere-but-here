\c travel_db

DELETE FROM cities;

\copy cities from 'citycode.csv' DELIMITER ','  CSV ;
