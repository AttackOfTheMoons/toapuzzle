import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Config = ({ setLitColor, setUnlitColor, reset, solve }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTime(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const restart = () => {
    reset()
    setTime(0)
  }

  return (
        <div className='config'>
            <div>Info?</div>
            <div><button onClick={restart}>New Game</button></div>
            <div>Time: {time}</div>
            <div><button onClick={() => solve()}>Solve</button></div>
        </div>
  )
}
Config.propTypes = {
  setLitColor: PropTypes.func,
  setUnlitColor: PropTypes.func,
  time: PropTypes.number,
  reset: PropTypes.func,
  solve: PropTypes.func
}

export default Config
