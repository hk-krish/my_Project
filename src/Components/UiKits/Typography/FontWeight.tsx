import { Card, CardBody, Col } from "reactstrap";
import { BoldFont, Bolder, FontWeightTitle, LightFont, MediumBold, NormalFont, fw300, fw400, fw500, fw600, fw700 } from "../../../Constants";
import { FontWeightSubTitle } from "../../../Data/UiKits/Typography";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const FontWeight = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={FontWeightTitle} span={FontWeightSubTitle} />
        <CardBody className="d-flex flex-column gap-3">
          <h1 className="f-w-700">{Bolder}<code> {fw700}</code></h1>
          <h2 className="f-w-600">{BoldFont}<code> {fw600}</code></h2>
          <h3 className="f-w-500">{MediumBold}<code> {fw500}</code></h3>
          <h4 className="f-w-400">{NormalFont}<code> {fw400}</code></h4>
          <h5 className="f-w-300">{LightFont}<code> {fw300}</code></h5>
        </CardBody>
      </Card>
    </Col>
  );
}
export default FontWeight;