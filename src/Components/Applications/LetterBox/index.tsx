import { Fragment, useState } from "react";
import { Container, Row } from "reactstrap";
import { Email, LetterBoxTitle } from "../../../Constants";
import EmailRightSide from "./EmailRightSide";
import EmailSidebar from "./EmailSidebar";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const LetterBoxContainer = () => {
  const [navId, setNavId] = useState("1");
  return (
    <Fragment>
      <Breadcrumbs mainTitle={LetterBoxTitle} parent={Email} />
      <Container fluid>
        <div className="message-wrap email-main-wrapper">
          <Row>
            <EmailSidebar navId={navId} setNavId={setNavId} />
            <EmailRightSide navId={navId} />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default LetterBoxContainer;
