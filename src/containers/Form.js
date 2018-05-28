import React from 'react'
import { connect } from 'react-redux'
import { changeValue } from '../actions'

const hasNumber = value => /\d/.test(value);
const hasNoNumbers = x => !hasNumber(x)
const hasOnlyNumbers = x => /^\d+$/.test(x)

const Form = ({ dispatch, inputs }) => {
  const changeHandler = (isValid, field, e) => {
    const { value } = e.target
    if (isValid(value)) {
      dispatch(changeValue(field, value, true))
    } else {
      dispatch(changeValue(field, value, false))
    }
  }
  const msg1 = inputs.name.isValid ? null : <span>should contain only letters</span>
  const msg2 = inputs.phone.isValid ? null : <span>should contain only numbers</span>
  return (
    <div>
      <form>
        <input type="text" value={inputs.name.value} onChange={changeHandler.bind(null, hasNoNumbers, 'name')}/>
        { msg1 }
        <br/>
        <input type="text" value={inputs.phone.value} onChange={changeHandler.bind(null, hasOnlyNumbers, 'phone')}/>
        { msg2 }
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}


function mapStateToProps(state) {
  return { inputs: state.form }
}
export default connect(mapStateToProps)(Form)
