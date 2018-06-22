const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Trip = require('./models/Trip')
const City = require('./models/Airport')

// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;
const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get("/cities.json", (request, response) => {
  City.all().then(data => {
   response.json(data);

  });
});
app.get("/trips.json", (request, response) => {
  Trip.all().then(data => {
   response.json(data);

  });
});

app.get("/trips/:id.json", (request, response) => {
  id = request.params.id;
  Trip.find(id).then(data => {
    response.json(data);
  });
});



app.post("/trips", (request, response) => {
  newTrip = {
    budget: request.body.budget,
    departure_date: request.body.departure_date,
    duration: request.body.duration,
    city_id: request.body.city_id
  };
  // console.log(newTrip)
  Trip.create(newTrip).then(data => {
    // console.log(newTrip)
    // console.log(data);
    response.json(data);

  });
});


// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Start the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
