const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Trip = require('./models/Trip')
const City = require('./models/City')

// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;
const jsonParser = bodyParser.json();
app.use(jsonParser);

//getiing all cities used for the form dropdown and converting the city code to name on summary page

app.get("/cities.json", (request, response) => {
  City.all().then(data => {
  response.json(data);
  });
});


//Used for the show previous trips page
app.get("/trips.json", (request, response) => {
  Trip.all().then(data => {
  response.json(data);
  });
});

//Joins the trip and city tables for the Armadeus API request
app.get("/trips/:id.json", (request, response) => {
  id = request.params.id;
  Trip.join(id).then(data => {
    response.json(data)
  })

})




//Creates new trip parameters in the database
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

app.put("/trips/:id/edit.json", (request, response) => {
  let id = request.params.id;
  updatedTrip = {
    trip_id: id,
    budget: request.body.budget,
    departure_date: request.body.departure_date,
    duration: request.body.duration,
    city_id: request.body.city_id
  };
  // console.log(newTrip)
  Trip.update(updatedTrip, id).then(data => {
    // console.log(newTrip)
    // console.log(data);
    response.json(data);
  });
});

app.post('/trips/:id/delete', (request, reponse) =>{
  let id = request.params.id
  Trip.delete(id).then(
    console.log('deleted')
  )
})


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
