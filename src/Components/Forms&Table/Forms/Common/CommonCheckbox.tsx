import { Input, Label } from "reactstrap";
import { CommonCheckboxType } from "../../../../Types/FormsType";

const CommonCheckbox:React.FC<CommonCheckboxType> = ({ id, labelClass, inputType, required, title, name, check, inputClass }) => {
  return (
    <Label htmlFor={id} className={labelClass} check={check}>
      <Input type={inputType} name={name} id={id} required={required} className={inputClass}/>
      {title}
    </Label>
  );
};

export default CommonCheckbox;
