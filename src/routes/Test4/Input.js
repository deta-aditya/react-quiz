import { useState } from "react";

const Input = ({ onChange }) => {
  const [input, setInput] = useState('')
  const handleSubmit = evt => {
    evt.preventDefault()
    onChange(input)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={evt => setInput(evt.target.value)} placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
