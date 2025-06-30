import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { ActiveButtonsTitle, BoldBorderOutlineButtonsTitle, ButtonsTitle, DefaultButtonTitle, DefaultStyleTitle, DisabledButtonsTitle, FlatButtonTitle, GradientButtonsTitle, OutlineButtonsTitle, RaisedButtonTitle, SizingButtonsTitle } from "../../../Constants";
import { ActiveButtonsData, ActiveButtonSubTitle, BoldBorderOutlineButtonsData, BoldBorderOutlineButtonSubTitle, DefaultButtonsData, DefaultButtonText, DisableButtonsData, DisabledButtonSubTitle, FlatButtonSubTitle, GradientButtonsSubTitle, GradientButtonsData, OutlineButtonsData, OutlineButtonSubTitle, RaisedButtonSubTitle, SizingButtonsData, SizingButtonSubTitle } from "../../../Data/Buttons/DefaultStyle";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import CommonButtons from "../Common/CommonButtons";

const DefaultStyleContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={DefaultStyleTitle} parent={ButtonsTitle} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonButtons commonButtonsData={DefaultButtonsData} title={DefaultButtonTitle} subTitle={DefaultButtonText} />
            <CommonButtons className="btn-square" commonButtonsData={DefaultButtonsData} title={FlatButtonTitle} subTitle={FlatButtonSubTitle} />
            <CommonButtons raised className="btn-pill" commonButtonsData={DefaultButtonsData} title={RaisedButtonTitle} subTitle={RaisedButtonSubTitle} />
            <CommonButtons commonButtonsData={SizingButtonsData} title={SizingButtonsTitle} subTitle={SizingButtonSubTitle} />
            <CommonButtons commonButtonsData={ActiveButtonsData} title={ActiveButtonsTitle} subTitle={ActiveButtonSubTitle} />
            <CommonButtons commonButtonsData={DisableButtonsData} title={DisabledButtonsTitle} subTitle={DisabledButtonSubTitle} />
            <CommonButtons commonButtonsData={OutlineButtonsData} title={OutlineButtonsTitle} subTitle={OutlineButtonSubTitle} />
            <CommonButtons commonButtonsData={BoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsTitle} subTitle={BoldBorderOutlineButtonSubTitle} />
            <CommonButtons commonButtonsData={GradientButtonsData} title={GradientButtonsTitle} subTitle={GradientButtonsSubTitle} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DefaultStyleContainer;
