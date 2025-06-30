import { Col, Input, Label } from "reactstrap";
import { CommonSelectType } from "../../../../Types/FormsType";

const CommonSelect:React.FC<CommonSelectType> = ({ title, colClass, id, data ,labelClass,inputClass}) => {
  return (
    <Col xs="12" className={colClass}>
      <Label htmlFor={id} className={labelClass}>{title}</Label>
      <Input type="select" id={id} required className={inputClass}>
        {data.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </Input>
    </Col>
  );
};

export default CommonSelect;
