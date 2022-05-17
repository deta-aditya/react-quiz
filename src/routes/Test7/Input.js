import { useContext } from "react"
import { AppContext } from "./context"

const Input = () => {
  const { setQuery } = useContext(AppContext)

  const handleSubmit = evt => {
    evt.preventDefault()
    setQuery(evt.target.elements.query.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="query" type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
