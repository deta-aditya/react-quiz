import { useContext } from 'react';
import { AppContext } from './context';
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const [{ myNumber2 }, dispatch] = useContext(AppContext)

  const handleClose = () => {
    dispatch({ type: 'toggle-modal' })
  }

  const handleInputChange = (evt) => {
    dispatch({ type: 'set-my-number-2', value: Number(evt.target.value) })
  }

  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button" onClick={handleClose}>⊗</button>
        </div>
        <input id="mynumber2" value={myNumber2} onChange={handleInputChange} type="text" placeholder="input mynumber2"></input>
      </div>
    </>
  )
}

export default Comp4;