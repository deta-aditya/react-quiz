import { cssWrapper } from './style';

import { useContext, useState } from "react";
import Comp2 from "./Comp2";
import styled from 'react-emotion';
import { AppContext } from './context';

const Input = styled('input')(props => ({
  display: props.show ? 'inline-block' : 'none'
}))

const Comp1 = () => {
  const [show, setShow] = useState(false);
  const [{ latestType, myNumber1 }, dispatch] = useContext(AppContext)

  const handleInputChange = (evt) => {
    dispatch({ type: 'set-my-number-1', value: Number(evt.target.value) })
  }

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>{latestType}</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={show} onChange={() => setShow(!show)}/>
        {/* only show when overwrite is checked */}
        <Input show={show} value={myNumber1} onChange={handleInputChange} id="mynumber1" type="text" placeholder="input mynumber1"/>
      </label>
      <Comp2 />
    </div>
  )
}

export default Comp1;