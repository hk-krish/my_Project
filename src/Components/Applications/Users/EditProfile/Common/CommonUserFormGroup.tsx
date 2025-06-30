import { Input, Label } from "reactstrap";
import { CommonUserFormGroupType } from "../../../../../Types/Applications";

const CommonUserFormGroup:React.FC<CommonUserFormGroupType> = ({ type, title, placeholder,defaultValue,row }) => {
  return (
    <div className="mb-3">
      <Label>{title}</Label>
      <Input type={type} placeholder={placeholder} defaultValue={defaultValue} rows={row} />
    </div>
  );
};

export default CommonUserFormGroup;
