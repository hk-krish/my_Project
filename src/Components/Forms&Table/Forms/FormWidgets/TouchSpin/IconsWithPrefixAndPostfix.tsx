import { Card, CardBody, Col } from "reactstrap";
import { IconsWithPrefixAndPostfixTitle } from "../../../../../Constants";
import CommonPrefixAndPostfix from "./Common/CommonPrefixAndPostfix";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { TouchSpinSubTitle } from "../../../../../Data/Forms&Table/Forms/FormWidgets";

const IconsWithPrefixAndPostfix = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={IconsWithPrefixAndPostfixTitle} span={TouchSpinSubTitle} />
        <CardBody className="common-flex pre-post-touchspin">
          <CommonPrefixAndPostfix preIcon />
          <CommonPrefixAndPostfix postIcon />
        </CardBody>
      </Card>
    </Col>
  );
};
export default IconsWithPrefixAndPostfix;
