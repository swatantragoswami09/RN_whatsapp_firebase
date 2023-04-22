import {
  validateEmail,
  validatePassword,
  validateString,
} from "../validationConstraints";

export const validateInput = async (inputId, inputValue) => {
  if (inputId === "firstName" || inputId === "lastName") {
    return await validateString(inputId, inputValue.toLowerCase());
  } else if (inputId === "email") {
    return await validateEmail(inputId, inputValue.toLowerCase());
  } else if (inputId === "password") {
    return await validatePassword(inputId, inputValue);
  }
};
