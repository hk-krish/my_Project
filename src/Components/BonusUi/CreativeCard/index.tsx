import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { BonusUi, CreativeCardTitle } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import AbsolutePrimary from "./AbsolutePrimary";
import AbsoluteSecondary from "./AbsoluteSecondary";
import BorderBottom from "./BorderBottom";
import BorderLeft from "./BorderLeft";
import BorderPrimary from "./BorderPrimary";
import BorderRight from "./BorderRight";
import BorderSecondary from "./BorderSecondary";
import BorderTop from "./BorderTop";
import BorderWarning from "./BorderWarning";

const CreativeCardContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={CreativeCardTitle} parent={BonusUi} />
      <Container fluid>
        <Row className="effective-card">
          <BorderLeft />
          <BorderRight />
          <BorderTop />
          <BorderBottom />
          <BorderPrimary />
          <BorderWarning />
          <BorderSecondary />
          <AbsolutePrimary />
          <AbsoluteSecondary />
        </Row>
      </Container>
    </Fragment>
  );
};
export default CreativeCardContainer;
