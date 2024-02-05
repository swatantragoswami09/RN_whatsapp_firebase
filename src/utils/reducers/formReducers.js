export const reducer = (state, action) => {
  const { inputId, validationResult, inputValue } = action;

  const updatedValues = {
    ...state.inputValues,
    [inputId]: inputValue,
  };

  const updatedValidities = {
    ...state.inputValidities,
    [inputId]: validationResult,
  };

  let updatedFormIsValid = true;
  console.log("updatedValidities=>", updatedValidities);
  for (const key in updatedValidities) {
    if (updatedValidities[key] !== undefined) {
      updatedFormIsValid = false;
      break;
    }
  }
  console.log("updatedFormIsValid=>", updatedFormIsValid);

  return {
    inputValues: updatedValues,
    inputValidities: updatedValidities,
    formIsValid: updatedFormIsValid,
  };
};
