import { async, validate } from "validate.js";

export const validateString = async (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraints.format = {
      pattern: "[a-z]+",

      flags: "i",

      message: "value can only contain letters",
    };
  }

  const validationResult = await validate.async(
    { [id]: value },
    { [id]: constraints }
  );

  return validationResult && validationResult[id];
};

export const validateEmail = async (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraints.email = true;
  }

  const validationResult = await validate.async(
    { [id]: value },
    { [id]: constraints }
  );

  console.log("validationResult=>", validationResult);

  return validationResult && validationResult[id];
};

export const validatePassword = async (id, value) => {
  console.log("your password", value);
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraints.length = {
      minimum: 6,

      message: "must be at least 6 characters",
    };
  }

  const validationResult = await validate.async(
    { [id]: value },
    { [id]: constraints }
  );
  console.log(
    "validationPasswordResult from validation=>",
    validationResult && validationResult[id]
  );

  return validationResult && validationResult[id];
};
