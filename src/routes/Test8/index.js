import { useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const emptyPayload = {
  name: '',
  age: '',
  address: '',
}

const Test8 = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [payload, setPayload] = useState(emptyPayload)

  const [isModalActive, setIsModalActive] = useState(false)

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (evt) => {
    if (!evt) {
      setIsModalActive(false)
      setPayload(emptyPayload)
      setName('')
      setAge('')
      setAddress('')
      return
    }

    if (evt.type === 'change') {
      let setter
      switch (evt.target.id) {
        case 'name':
          setter = setName
          break
        case 'age':
          setter = setAge
          break
        case 'address':
          setter = setAddress
          break
        default:
          setter = () => {}
      }

      setter(evt.target.value)
      return
    }

    if (evt.type === "submit") {
      evt.preventDefault()
      setPayload({ name, age, address })
      setIsModalActive(true)
    }
  }

  // const handleSubmit = evt => {
  //   evt.preventDefault()
  //   const { name: { value: name }, age: { value: age }, address: { value: address } } = evt.target.elements
  //   setPayload({ name, age, address })
  //   setIsModalActive(true)
  // };

  // const handleReset = () => {
  //   setIsModalActive(false)
  //   setPayload(emptyPayload)
  // }

  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} onSubmit={handleInput}>
        <input type="text" id="name" placeholder="name" value={name} onChange={handleInput} />
        <input type="text" id="age" placeholder="age" value={age} onChange={handleInput} />
        <textarea type="text" id="address" placeholder="address" value={address} onChange={handleInput} />
        <button>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {isModalActive && <Modal payload={payload} onReset={handleInput} />}
    </div>
  )
}

export default Test8;