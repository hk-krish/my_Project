import { Card, CardBody, Col } from "reactstrap";
import { ButtonsWithPrefixPostfixTitle } from "../../../../../Constants";
import CommonPrefixAndPostfix from "./Common/CommonPrefixAndPostfix";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { TouchSpinSubTitle } from "../../../../../Data/Forms&Table/Forms/FormWidgets";

const ButtonsWithPrefixPostfix = () => {
  return (
    <Col xl="6">
      <Card className="custom-prefix">
        <CommonCardHeader title={ButtonsWithPrefixPostfixTitle} span={TouchSpinSubTitle} />
        <CardBody className="common-flex pre-post-touchspin bg-touchspin">
          <CommonPrefixAndPostfix preButton color />
          <CommonPrefixAndPostfix PostButton color />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ButtonsWithPrefixPostfix;
