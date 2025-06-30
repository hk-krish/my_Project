import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { BasicCardTitle, BonusUi } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import BasicCard from "./BasicCard";
import DarkCard from "./DarkCard";
import FlatCard from "./FlatCard";
import HeadingIcon from "./HeadingIcon";
import InfoColorCard from "./InfoColorCard";
import WithoutShadow from "./WithoutShadow";

const BasicCardContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BasicCardTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BasicCard />
          <FlatCard />
          <WithoutShadow />
          <HeadingIcon />
          <DarkCard />
          <InfoColorCard />
        </Row>
      </Container>
    </Fragment>
  );
};
export default BasicCardContainer;
