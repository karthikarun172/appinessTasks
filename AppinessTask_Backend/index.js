/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const config = require("config");
const mongoose = require("mongoose");

let db = config.get("db");

mongoose
  .connect(db)
  .then(() => console.log(`Connected to ${db}`))
  .catch((er) => console.log("Could not Connect\n"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

app.use("/api/Appiness_register", require("./routes/Appiness_register"));
app.use("/api/Appiness_Login", require("./routes/Appiness_Login"));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
