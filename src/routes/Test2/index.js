import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [input, setInput] = useState('')

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label value={input} onClose={() => setInput('')} />
      </p>
      <Input value={input} onChange={setInput} />
    </div>
  )
}

export default Test2;