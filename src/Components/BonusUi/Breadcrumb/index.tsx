import { Container, Row } from "reactstrap";
import ColoredBreadcrumb from "./ColoredBreadcrumb";
import DefaultBreadcrumb from "./DefaultBreadcrumb";
import DividerBreadcrumb from "./DividerBreadcrumb";
import VariationBreadcrumb from "./VariationBreadcrumb";
import WithIconBreadcrumb from "./WithIconBreadcrumb";
import { BonusUi, BreadcrumbTitle } from "../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const BreadcrumbContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BreadcrumbTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <DefaultBreadcrumb />
          <DividerBreadcrumb />
          <WithIconBreadcrumb />
          <VariationBreadcrumb />
          <ColoredBreadcrumb />
        </Row>
      </Container>
    </Fragment>
  );
};
export default BreadcrumbContainer;
