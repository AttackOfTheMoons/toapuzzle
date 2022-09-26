import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

const History = ({ styles, history }) => (
    <div className='history' style={ styles }>
        {history.map((light, i) => (<Box key={i} lights={light} size={'littleBox'}/>))}
      </div>
)
History.propTypes = {
  styles: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired
}

export default History
