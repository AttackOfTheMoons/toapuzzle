import React from 'react'
import PropTypes from 'prop-types'
import Light from './Light'

const Row = ({ lights, rowNum, flip }) => (
    <div className="row">
        {lights.map((light, index) =>
            <Light
                key={rowNum * 3 + index}
                on={light}
                flip={() => flip(rowNum * 3 + index)}
            />
        )}
    </div>
)
Row.propTypes = {
  lights: PropTypes.array.isRequired,
  rowNum: PropTypes.number.isRequired,
  flip: PropTypes.func.isRequired
}

export default Row
