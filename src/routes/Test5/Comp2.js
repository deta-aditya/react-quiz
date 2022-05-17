import { AppContext } from './context';
import { cssWrapper } from './style';

const Comp2 = () => {
  return(
    <>
      <div className={cssWrapper}>
        <AppContext.Consumer>
          {([{ latestVal }]) => 
            `Latest inputted value is: ${latestVal}`
          }
        </AppContext.Consumer>
      </div>
    </>
  )
}

export default Comp2;