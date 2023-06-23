const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/routes");

const mongoString = process.env.DB_URL;

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => {
    console.log("Unable to connect", err);
  });

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is running on 3000...");
});
