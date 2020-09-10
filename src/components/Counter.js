import React from 'react'
import PropTypes from 'prop-types'

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <p>
      Clicked: {value} times <button onClick={onIncrement}>+</button>{' '}
      <button onClick={onDecrement}>-</button>
    </p>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
