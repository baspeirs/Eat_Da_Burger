const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"))

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "views/layouts/main.handlebars"));
});

// Import routes and give the server access to them.
const routes = require("./controllers/burgControl"); // ===== use this to require controller files // make sure to get the path right ======
// use the controller files
app.use(routes);

// require our orm file ---- orm will do the connection to the database
const orm = require("./config/orm")

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});