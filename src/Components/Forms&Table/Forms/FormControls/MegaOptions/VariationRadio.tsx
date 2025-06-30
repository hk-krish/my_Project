import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { VariationRadioTitle } from "../../../../../Constants";
import { VariationRadioData, VariationRadioSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import SvgIcon from "../../../../CoreComponents/SvgIcon";

const VariationRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={VariationRadioTitle} span={VariationRadioSubTitle} />
        <CardBody>
          <Row className="g-3">
            {VariationRadioData.map((data) => (
              <Col xl="4" className={data.id !== 3 ? "col-md-6" : ""} key={data.id}>
                <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                  <h6 className="sub-title">{data.title}</h6>
                  {data.child.map((item) => (
                    <div className="payment-wrapper" key={item.id}>
                      <div className="payment-first">
                        <FormGroup className="radio radio-primary" check>
                          <Input id={`ptm${item.id}`} type="radio" name={item.name} value="option1" defaultChecked={item.check ? true : false} />
                          <Label className="mb-0" htmlFor={`ptm${item.id}`} check>{item.labelText}</Label>
                        </FormGroup>
                      </div>
                      {(data.id === 1 || data.id === 3) && (
                        <div className="payment-second">
                          {item.image && <Image className="img-fluid" src={dynamicImage(`ecommerce/${item.image}`)} alt="e-commerce" />}
                          {item.icon && <SvgIcon className={`mega-icons stroke-${item.iconColor}`} iconId={item.icon} />}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default VariationRadio;
