import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { FormControlsTitle, TwoFactorTitle } from "../../../../../Constants";
import EmailVerification from "./EmailVerification";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const TwoFactorContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TwoFactorTitle} parent={FormControlsTitle} />
      <Container fluid>
        <Row>
          <TwoFactorAuthentication />
          <EmailVerification />
        </Row>
      </Container>
    </Fragment>
  );
};
export default TwoFactorContainer;
