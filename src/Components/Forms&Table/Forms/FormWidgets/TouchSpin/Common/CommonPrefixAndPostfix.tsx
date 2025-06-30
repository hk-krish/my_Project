import React, { useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import { Post, Pre } from "../../../../../../Constants";
import { CommonPrefixAndPostfixProp } from "../../../../../../Types/FormsType";

const CommonPrefixAndPostfix: React.FC<CommonPrefixAndPostfixProp> = ({ postIcon, preIcon, preButton, PostButton, color }) => {
  const [touchSpinValue, setTouchSpinValue] = useState(0);
  const decrementHandle = () => {
    if (touchSpinValue > 0) {
      setTouchSpinValue(touchSpinValue - 1);
    }
  };
  const incrementHandle = () => setTouchSpinValue(touchSpinValue + 1);

  return (
    <InputGroup>
      <Button color="transparent" onClick={decrementHandle} className={`decrement-touchspin btn-touchspin px-3 touchspin-${color ? "warning" : "primary"}`}>
        <i className="fa fa-minus" />
      </Button>
      {preIcon ? <InputGroupText>{"$"}</InputGroupText> : ""}
      {preButton ? (<Button type="button" className="px-2" outline color="warning">{Pre}</Button>) : ("")}
      <Input className="input-touchspin spin-outline-primary" type="number" value={touchSpinValue} readOnly />
      {postIcon ? <InputGroupText>{"%"}</InputGroupText> : ""}
      {PostButton ? (<Button type="button" className="px-2" outline color="warning">{Post}</Button>) : ("")}
      <Button color="transparent" onClick={incrementHandle} className={`increment-touchspin btn-touchspin px-3 touchspin-${color ? "warning" : "primary"}`}>
        <i className="fa fa-plus"> </i>
      </Button>
    </InputGroup>
  );
};
export default CommonPrefixAndPostfix;
