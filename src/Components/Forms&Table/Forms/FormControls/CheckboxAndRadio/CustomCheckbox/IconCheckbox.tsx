import { Col, FormGroup, Input, Label } from "reactstrap";
import { IconCheckboxTitle } from "../../../../../../Constants";
import { IconCheckboxData } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const IconCheckbox = () => {
  return (
    <Col xl="4" sm="12" className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{IconCheckboxTitle}</h6>
        <FormGroup className="checkbox checkbox-primary ps-0 main-icon-checkbox" check>
          <ul className="checkbox-wrapper">
            {IconCheckboxData.map((data) => (
              <li key={data.id}>
                <Input className="checkbox-shadow" id={data.id} type="checkbox" defaultChecked={data.check ? true : false} />
                <Label htmlFor={data.id} check>
                  <i className={`fa fa-${data.icon}`}></i>
                  <span>{data.text}</span>
                </Label>
              </li>
            ))}
          </ul>
        </FormGroup>
      </div>
    </Col>
  );
};
export default IconCheckbox;
