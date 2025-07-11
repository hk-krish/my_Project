import { Input, Label } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";
import { FindCourseCheckbox } from "../../../../../../Data/Miscellaneous/Learning";
import { Fragment } from "react/jsx-runtime";

const CheckboxLists = () => {
  return (
    <Fragment>
      {FindCourseCheckbox.map((data) => (
        <div className={`checkbox-animated ${data.id !== 1 ? "mt-0" : ""}`} key={data.id}>
          <div className="learning-header">
            <span className="f-w-600">{data.title}</span>
          </div>
          {data.child.map((item) => (
            <Label className="d-block" htmlFor={`ani${item.id}`} key={item.id}>
              <Input className={data.id === 3 ? "radio_animated" : "checkbox_animated"} id={`ani${item.id}`} type={item.type as InputType} name={item.name ? item.name : ""} defaultChecked={item.check ? true : false} />
              {item.text}
            </Label>
          ))}
        </div>
      ))}
    </Fragment>
  );
};
export default CheckboxLists;
