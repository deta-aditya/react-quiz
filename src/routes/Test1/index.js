import { useState } from "react";

const Test1 = () => {
  const [input, setInput] = useState('')

  return (
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {input}
      </p>
      <input type="text" value={input} onChange={evt => setInput(evt.target.value)} placeholder="input here" />
    </div>
  )
}

export default Test1;