import { cssWrapper } from "./style";

import { useContext } from "react";
import Comp4 from "./Comp4";
import { AppContext } from "./context";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [{ myNumber, showModal }, dispatch] = useContext(AppContext)

  const handleShowModal = () => {
    dispatch({ type: 'toggle-modal' })
  }

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {myNumber}</div>
      <button type="button" onClick={handleShowModal}>Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;