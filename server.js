const  express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;
const jsonParser = bodyParser.json();
app.use(jsonParser);



app.get("https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wuSjsq5981Vet1MPJkhu3FB4HxAABw1U&origin=NYC&departure_date=2018-06-29&duration=5&max_price=500", (request, response) => {
  Trip.all(request.params.id).then(data => {
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


