import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { Alert, LinkColorTitle, LinkLightColorTitle, UIKits } from "../../../Constants";
import { AlertColorData, AlertLightColorData } from "../../../Data/UiKits/Alert";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import AdditionalAlert from "./AdditionalAlert";
import AlertWithIcons from "./AlertWithIcons";
import CommonLinkColor from "./CommonLinkColor";
import DismissingDarkAlert from "./DismissingDarkAlert";
import DismissingLightAlert from "./DismissingLightAlert";
import LeftBorderAlert from "./LeftBorderAlert";
import LiveAlert from "./LiveAlert";
import OutlineAlert from "./OutlineAlert";

const AlertContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Alert} parent={UIKits} />
      <Container fluid>
        <Row>
          <CommonLinkColor title={LinkColorTitle} data={AlertColorData} text/>
          <CommonLinkColor title={LinkLightColorTitle} data={AlertLightColorData} text/>
          <OutlineAlert />
          <AlertWithIcons />
          <DismissingDarkAlert />
          <DismissingLightAlert />
          <LiveAlert />
          <LeftBorderAlert />
          <AdditionalAlert />
        </Row>
      </Container>
    </Fragment>
  );
};
export default AlertContainer;
