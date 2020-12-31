/** @format */

import ContextProvider from "./ContextProvider";
import httpServices from "../Services/httpServices";
import { apiEndPoint } from "../config.json";
import AsyncStorage from "@react-native-community/async-storage";

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGN_UP_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGN_IN":
      return { ...state, token: action.payload };
    case "SIGN_OUT":
      return { token: null, errorMessage: "" };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };

    case "REGISTERED_USER":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

const locatSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGN_IN", payload: token });
  } else {
    return null;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

const Registerd_Users = (dispatch) => async () => {
  try {
    const response = await httpServices.get(apiEndPoint + `/Appiness_register`);
    dispatch({ type: "REGISTERED_USER", payload: response.data });
  } catch (er) {
    console.log(er);
  }
};

const Register = (dispatch) => async (
  name,
  email,
  age,
  gender,
  phone,
  password,
  callback
) => {
  try {
    const response = await httpServices.post(
      apiEndPoint + "/Appiness_register",
      {
        name,
        email,
        age,
        gender,
        phone,
        password,
      }
    );
    await AsyncStorage.setItem("token", response.data);
    dispatch({ type: "SIGN_IN", payload: response.data });
    if (callback) {
      callback();
    }
  } catch (er) {
    dispatch({ type: "SIGN_UP_ERROR", payload: "error" });
  }
};

const Login = (dispatch) => async (email, password, callback) => {
  try {
    const response = await httpServices.post(apiEndPoint + "/Appiness_Login", {
      email,
      password,
    });

    await AsyncStorage.setItem("token", response.data);
    dispatch({ type: "SIGN_IN", payload: response.data });
    if (callback) {
      callback();
    }
  } catch (er) {
    dispatch({ type: "SIGN_IN_ERROR", payload: "Invalid Details" });
  }
};

const SignOff = (dispatch) => () => {
  AsyncStorage.removeItem("token");
  dispatch({ type: "SIGN_OUT" });
};

export const { Context, Provider } = ContextProvider(
  RegisterReducer,
  { Registerd_Users, Register, Login, SignOff, locatSignIn, clearErrorMessage },
  { users: [], token: null, errorMessage: "" }
);
