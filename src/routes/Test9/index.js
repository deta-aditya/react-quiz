import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [planets, setPlanets] = useState(1) 

  const handleInput = evt => {
    const numValue = Number(evt.target.value)
    setPlanets(isNaN(numValue) || numValue < 1 ? 1 : numValue)
  }

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" value={String(planets)} onChange={handleInput} placeholder="number of planet"/>
      <Solar planets={planets} />
    </>
  )
}

export default Test9;