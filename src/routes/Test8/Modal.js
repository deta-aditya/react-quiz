import { cssModal } from "./style"

const Modal = ({ payload: { name, age, address }, onReset }) => {
  return (
    <div className={cssModal}>
      Name: {name}
      <br/>
      Age: {age}
      <br/>
      Address: {address}
      <br/>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
};

export default Modal;
