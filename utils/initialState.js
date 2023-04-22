export const initialRegisterState = {
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

export const initialLoginState = {
  inputValidities: {
    email: false,
    password: false,
  },

  formIsValid: false,
};
