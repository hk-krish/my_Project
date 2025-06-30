import { Col, FormGroup, Input, Label } from "reactstrap";
import { FilledRadioTitle } from "../../../../../../Constants";
import { FilledRadioData } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const FilledRadio = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 fill-radios h-100 checkbox-checked">
        <h6 className="sub-title">{FilledRadioTitle} </h6>
        {FilledRadioData.map((data) => (
          <FormGroup key={data.id} className={`radio radio-${data.color}`} check>
            <Input id={`radio-${data.id}`} type="radio" name="radio3" value="option3" defaultChecked={data.check ? true : false} />
            <Label htmlFor={`radio-${data.id}`} check>{data.text}</Label>
          </FormGroup>
        ))}
      </div>
    </Col>
  );
};
export default FilledRadio;
