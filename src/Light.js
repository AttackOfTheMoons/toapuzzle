import React from 'react'
import PropTypes from 'prop-types'

const Light = ({ light, flip }) => {
  const classify = (on) => {
    switch (on) {
      case true:
      case 1:
        return 'activeLight'
      case false:
      case 0:
        return 'inactiveLight'
      default:
        return ''
    }
  }

  return (
       <div className={`lightBox ${classify(light.on)}`} onClick={flip || undefined} onMouseDown={(e) => e.preventDefault()}>
        {light.count > 0 ? light.count : undefined}
       </div>
  )
}

Light.propTypes = {
  light: PropTypes.object,
  flip: PropTypes.func
}

export default Light
