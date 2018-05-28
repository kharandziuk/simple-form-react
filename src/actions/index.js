export const changeValue = (field, value, isValid) => ({
  type: "CHANGE_VALUE",
  value, isValid, field
})
