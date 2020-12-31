/** @format */

const router = require("express").Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");
const {
  AppinessRegister,
  ValidateRegister,
} = require("../models/Appiness_register");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  let appiness_register = await AppinessRegister.find().select("-password");
  res.send(appiness_register);
});

router.post("/", async (req, res) => {
  const { error } = ValidateRegister(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  let appiness_register = await AppinessRegister.findOne({
    email: req.body.email,
  });
  if (appiness_register)
    return res.status(400).send("You already work here...");

  appiness_register = new AppinessRegister(
    _.pick(req.body, ["name", "email", "age", "gender", "phone", "password"])
  );

  const salt = await bcrypt.genSalt(20);
  appiness_register.password = await bcrypt.hash(
    appiness_register.password,
    salt
  );

  const token = appiness_register.generateAuthToken();

  appiness_register = await appiness_register.save();

  res.header("x-auth-header", token).send(token);
});

module.exports = router;
