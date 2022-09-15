import { useState, React } from 'react'
import Row from './Row'

const Box = () => {
  const randomLights = Array.from({ length: 9 }, (_, i) => i === 4 ? null : Math.random() > 0.5)
  const [lights, setLights] = useState(randomLights)
  const rows = Array.from({ length: 3 }, (_, i) => lights.slice(i * 3, i * 3 + 3))
  const flip = (num) => {
    const toggled = new Set()
    toggled.add(num)
    if (num < 6) {
      toggled.add(num + 3)
    }
    if (num % 3 !== 2) {
      toggled.add(num + 1)
    }
    if (num % 3 !== 0) {
      toggled.add(num - 1)
    }
    if (num > 2) {
      toggled.add(num - 3)
    }
    setLights(lights.map((on, index) => toggled.has(index) && index !== 4 ? !on : on))
  }
  return (
        <div className="boxGame">
            {rows.map((row, i) => <Row key={i} lights={row} rowNum={i} flip={(num) => flip(num)}/>)}
        </div>
  )
}

export default Box
