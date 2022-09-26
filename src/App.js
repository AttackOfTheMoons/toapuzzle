import React, { useState } from 'react'
import Title from './Title'
import Box from './Box'
import Config from './Config'
import History from './History'
import FlipArray from './FlipArray'

const App = () => {
  const defaultLight = { count: 0 }
  const randomLights = () => Array.from({ length: 9 }, (_, i) => i === 4 ? { on: undefined, ...defaultLight } : { on: Math.random() > 0.5, ...defaultLight })
  const [litColor, setLitColor] = useState('green')
  const [unlitColor, setUnlitColor] = useState('red')
  const [lights, setLights] = useState(randomLights())
  const [history, setHistory] = useState([lights])
  const styles = {
    '--lit-color': litColor,
    '--unlit-color': unlitColor
  }
  const flip = (...nums) => {
    if (nums.length === 1) {
      lightUpdate(flippedLights(nums[0], lights))
    } else {
      let lightCopy = lights
      nums.forEach((num) => { lightCopy = flippedLights(num, lightCopy) })
      lightUpdate(lightCopy)
    }
  }
  const flippedLights = (num, lightarray) => lightarray.map(({ on, count }, index) => ({ on: (on + FlipArray[num][index]) % 2, count: count + (num === index && (on !== undefined && !isNaN(on))) }))

  const bruteForceSolve = () => {
    const needFlip = lights.map((light, index) => ({ index, ...light })).filter(({ on }) => on === false || on === 0)
    if (needFlip.length === 0) {
      setLights(lights.map(({ on, count }) => ({ on, count: count % 2 })))
      return
    }
    flip(...needFlip.map(({ index }) => index))
  }
  const lightUpdate = (lightUpdate) => {
    setLights(lightUpdate)
    setHistory(history.concat([lightUpdate]))
  }
  const restart = () => {
    const newLights = randomLights()
    setLights(newLights)
    setHistory([newLights])
  }

  return (
    <div className='app'>
      <Title text={'TOA Puzzle Helper'}/>
      <div className='mainGame' style={styles}>
        <Box lights={lights} size={'bigBox'} flip={flip}/>
        <Config setLitColor={setLitColor} setUnlitColor={setUnlitColor} reset={restart} solve={bruteForceSolve}/>
      </div>
      {history.length > 1 ? <History styles={styles} history={history}/> : undefined}
    </div>
  )
}

export default App
