import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import { ImagesCheckboxTitle } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { ImageWithCheckboxData, ImagesWithCheckBoxSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import { dynamicImage, Image } from "../../../../../Utils";

const ImagesWithCheckbox = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={ImagesCheckboxTitle} span={ImagesWithCheckBoxSubTitle} />
        <CardBody>
          <div className="main-img-checkbox">
            <Row className="g-3">
              {ImageWithCheckboxData.map((data) => (
                <Col xxl="3" sm="6" key={data.id}>
                  <div className="card-wrapper border rounded-3 checkbox-checked">
                    <h6 className="sub-title">{data.title}</h6>
                    <div className="img-checkbox">
                      <Input className="main-img-cover" id={`img-check-${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} disabled={data.disabled ? true : false} />
                      <Label className="mb-0" htmlFor={`img-check-${data.id}`} check>
                        <Image src={dynamicImage(`switch/${data.image}`)} alt="images" />
                      </Label>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ImagesWithCheckbox;
