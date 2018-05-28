



/*
 * {isValid: true, value: katia}
 */
const form = (state={ name: {isValid: false, value: 'katia9'}, phone: { isValid: true, value: '8095735343'}}, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      state[action.field].isValid = action.isValid
      state[action.field].value = action.value
      const new1 = Object.assign({}, state)
      console.log(new1)
      return new1
    default:
      return state
  }
}

export default form
