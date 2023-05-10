export const initialRegisterState = {
  inputValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    about:''
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    about: false
  },
  formIsValid: false,
};

export const initialLoginState = {
  inputValues: {
    email: "",
    password: "",
  },
  inputValidities: {
    email: false,
    password: false,
  },

  formIsValid: false,
};
