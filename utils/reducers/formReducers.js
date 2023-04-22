export const reducer = (state, action) => {
  const { inputId, validationResult } = action;

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
    inputValidities: updatedValidities,
    formIsValid: updatedFormIsValid,
  };
};
