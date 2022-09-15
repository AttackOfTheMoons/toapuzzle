import React from 'react'
import PropTypes from 'prop-types'

const Light = ({ on, flip }) => {
  let className = null
  switch (on) {
    case true:
      className = 'activelight'
      break
    case false:
      className = 'inactivelight'
      break
    default:
      className = 'nolight'
      break
  }

  return (
        <div className="lightbox">
            <div className={className} onClick={on === null ? undefined : () => flip()}> </div>
        </div>
  )
}

Light.propTypes = {
  on: PropTypes.oneOf([null, true, false]),
  flip: PropTypes.func.isRequired
}

export default Light
