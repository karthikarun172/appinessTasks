/** @format */

const router = require("express").Router();
const _ = require("lodash");
const { AppinessRegister } = require("../models/Appiness_register");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
  const { error } = ValidateAppinessLogin(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  let appiness_login = await AppinessRegister.findOne({
    email: req.body.email,
  });
  if (!appiness_login) return res.status(400).send("Invalid Credentials..");

  let validPassword = await bcrypt.compare(
    req.body.password,
    appiness_login.password
  );
  if (!validPassword) return res.status(401).send("Invalid Credentials..");

  const token = appiness_login.generateAuthToken();

  res.send(token);
});

function ValidateAppinessLogin(login) {
  const Schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return Schema.validate(login);
}

module.exports = router;
