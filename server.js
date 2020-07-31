// Dependencies
// =============================================================
const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
// const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// These routes give our server a "map" of how
// to respond when users visit or request data from various URLs.

// require("./routes/routes")(app);
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

// LISTENER; the code below starts our server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
