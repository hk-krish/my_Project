import { Container, Row } from "reactstrap";
import { Avatars, UIKits } from "../../../Constants";
import AvatarSizes from "./AvatarSizes";
import Grouping from "./Grouping";
import Ratio from "./Ratio";
import Shapes from "./Shapes";
import StatusIndicator from "./StatusIndicator";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const AvatarsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Avatars} parent={UIKits} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <AvatarSizes />
            <StatusIndicator />
            <Shapes />
            <Ratio />
            <Grouping />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default AvatarsContainer;
