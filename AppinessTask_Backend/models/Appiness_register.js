/** @format */

const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const AppinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

AppinessSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "jwtPrivateKey");
  return token;
};

const AppinessRegister = mongoose.model("AppinessRegister", AppinessSchema);

function ValidateRegister(register) {
  const Schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    age: Joi.string().required(),
    gender: Joi.string().required(),
    phone: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    password: Joi.string().required(),
  });
  return Schema.validate(register);
}

exports.AppinessRegister = AppinessRegister;
exports.ValidateRegister = ValidateRegister;
