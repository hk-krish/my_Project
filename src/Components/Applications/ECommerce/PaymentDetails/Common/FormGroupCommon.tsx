import { Input } from "reactstrap";
import { FormGroupCommonProp } from "../../../../../Types/EcommerceType";

const FormGroupCommon:React.FC<FormGroupCommonProp> = ({ type, placeholder,formClass,rows }) => {
  return (
    <div className={`mb-3 ${formClass ? formClass : ""}`}>
      <Input type={type} placeholder={placeholder} rows={rows} />
    </div>
  );
};

export default FormGroupCommon;