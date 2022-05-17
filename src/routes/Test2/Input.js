const Input = ({ value, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value)
  }
  return <input type="text" value={value} onChange={handleChange} placeholder="input here" />
}

export default Input;
