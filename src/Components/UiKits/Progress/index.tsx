import { Col, Container, Row } from "reactstrap";
import { BasicProgressBars, CustomHeightProgressTitle, CustomProgressTitle, LargeProgressTitle, Progress, ProgressAnimated, ProgressStriped, UIKits } from "../../../Constants";
import { AnimetedProgressSubTitle, BasicProgressData, BasicProgressSubTitle, CustomHeightData, CustomProgressData, CustomProgressSubTitle, CustomSubTitle, LargeProgressData, LargeProgressSubTitle, StripedProgressData, StripedProgressSubTitle } from "../../../Data/UiKits/Progress";
import CommonProgress from "./CommonProgress/CommonProgress";
import MultipleBars from "./MultipleBars";
import ProgressWithNumber from "./ProgressWithNumber";
import SmallProgress from "./SmallProgress";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const ProgressContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Progress} parent={UIKits} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonProgress title={BasicProgressBars} span={BasicProgressSubTitle} data={BasicProgressData} value/>
            <Row>
              <Col xl="6"><CommonProgress title={ProgressStriped} span={StripedProgressSubTitle} data={StripedProgressData} striped /></Col>
              <Col xl="6"><CommonProgress title={ProgressAnimated} span={AnimetedProgressSubTitle} data={StripedProgressData} striped animated /></Col>
            </Row>
            <Row>
              <MultipleBars />
              <ProgressWithNumber />
            </Row>
            <CommonProgress title={CustomProgressTitle} span={CustomProgressSubTitle} data={CustomProgressData} progressClass={"mb-4 text-center"} striped animated tag value/>
            <Row>
              <Col xl="6"><SmallProgress /></Col>
              <Col xl="6"><CommonProgress title={LargeProgressTitle} span={LargeProgressSubTitle} data={LargeProgressData} progressClass="lg-progress-bar" value/></Col>
            </Row>
            <CommonProgress title={CustomHeightProgressTitle} span={CustomSubTitle} data={CustomHeightData} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
export default ProgressContainer;