import { Col, FormGroup, Input, Label } from "reactstrap";
import { CommonInputType } from "../../../../Types/FormsType";
import { Fragment } from "react/jsx-runtime";

const CommonInput:React.FC<CommonInputType> = ({ colClass, id, placeholder, required, title, inputType, formGroup ,floating ,groupClass,labelClass,inputClass}) => {
  return (
    <Col className={colClass ? colClass : "col-12"}>
      {!formGroup ? (
        <Fragment>
          <Label htmlFor={id} className={labelClass}>{title}</Label>
          <Input id={id} type={inputType} placeholder={placeholder} required={required} className={inputClass} autoComplete="off"/>
        </Fragment>
      ) : (
        <Fragment>
          <FormGroup floating={floating} className={groupClass}>
            <Label htmlFor={id} className={labelClass}>{title}</Label>
            <Input id={id} type={inputType} placeholder={placeholder} required={required} className={inputClass} autoComplete="off"/>
          </FormGroup>
        </Fragment>
      )}
    </Col>
  );
};

export default CommonInput;
