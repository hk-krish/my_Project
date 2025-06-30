import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { BonusUi, Tour } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import UserProfileFifthStyle from "./UserProfileFifthStyle";
import UserProfileFirstStyle from "./UserProfileFirstStyle";
import UserProfileFourthStyle from "./UserProfileFourthStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle";
import UserProfileThirdStyle from "./UserProfileThirdStyle";

const TourMain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Tour} parent={BonusUi} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <UserProfileFirstStyle />
            <UserProfileSecondStyle />
            <UserProfileThirdStyle />
            <UserProfileFourthStyle />
            <UserProfileFifthStyle />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default TourMain;
