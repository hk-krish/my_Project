import { useState } from "react";
import { TouchSpinProp } from "../../../../../../Types/FormsType";
import { Button } from "reactstrap";

const CommonTouchSpin:React.FC<TouchSpinProp>=({ color, arrowIcon, outline, btnClass })=> {
  const [touchSpinValue, setTouchSpinValue] = useState(Math.floor(Math.random() * 10));

  const decrementHandle = () => {
    if (touchSpinValue > 0) {
      setTouchSpinValue(touchSpinValue - 1);
    }
  };
  
  const incrementHandle = () => setTouchSpinValue(touchSpinValue + 1);

  return (
    <div className="touchspin-wrapper d-flex align-items-center justify-content-center">
      <Button onClick={decrementHandle} color="" outline={outline} className={`decrement-touchspin btn-touchspin ${btnClass ? btnClass : ""}`}>
        {arrowIcon ? <i className="fa fa-angle-left d-flex align-items-center justify-content-center" /> : <i className="fa fa-minus d-flex align-items-center justify-content-center" />}
      </Button>
      <input className={`mx-1 input-touchspin spin-outline-${color}`} type="number" value={touchSpinValue} readOnly />
      <Button onClick={incrementHandle} color="" outline={outline} className={`increment-touchspin btn-touchspin ${btnClass ? btnClass : ""}`}>
        {arrowIcon ? <i className="fa fa-angle-right d-flex align-items-center justify-content-center" /> : <i className="fa fa-plus d-flex align-items-center justify-content-center" />}
      </Button>
    </div>
  );
}
export default CommonTouchSpin;