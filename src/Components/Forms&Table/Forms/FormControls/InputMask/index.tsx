import { Fragment } from "react/jsx-runtime";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { FormControlsTitle, InputMaskTitle } from "../../../../../Constants";
import { InputMasksSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import DateFormat from "./DateFormat";
import DefaultInputMask from "./DefaultInputMask";
import TimeFormat from "./TimeFormat";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const InputMaskContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={InputMaskTitle} parent={FormControlsTitle} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card>
              <CommonCardHeader title={InputMaskTitle} span={InputMasksSubTitle} />
              <CardBody className="input-mask">
                <Row className="g-3">
                  <DateFormat />
                  <TimeFormat />
                  <DefaultInputMask />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default InputMaskContainer;
