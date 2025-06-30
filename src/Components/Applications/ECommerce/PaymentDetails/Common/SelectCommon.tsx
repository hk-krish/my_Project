import { Input } from "reactstrap";
import { SelectCommonProp } from "../../../../../Types/EcommerceType";

const SelectCommon:React.FC<SelectCommonProp> = ({ data,size ,selectClass}) => {
  return (
    <div className={`mb-3 ${selectClass}`}>
      <Input type="select" size={size}>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </Input>
    </div>
  );
};

export default SelectCommon;
