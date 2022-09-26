import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const Box = ({ lights, size, flip }) => {
  const lightRows = Array.from({ length: 3 }, (_, i) => lights.slice(i * 3, i * 3 + 3))
  return (
    <div className={`${size} gameBox`}>
      {lightRows.map((row, i) => <Row key={i} lights={row} rowNum={i} flip={size === 'bigBox' ? (num) => flip(num) : undefined}/>)}
    </div>
  )
}
Box.propTypes = {
  lights: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
  flip: PropTypes.func
}

export default Box
