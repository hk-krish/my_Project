import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { BusinessVerticalTitle, BusinessWizardTitle, CustomHorizontalTitle, CustomVerticalTitle, FormLayoutTitle, StepFormWizardTitle } from "../../../../../Constants";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import BusinessWizard from "./BusinessWizard";
import CustomWizard from "./CustomWizard";

const FormWizard2Container = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={StepFormWizardTitle} parent={FormLayoutTitle} />
      <Container fluid>
        <Row>
          <CustomWizard title={CustomHorizontalTitle} navColClass="col-12" tabColClass="col-12" differentId />
          <BusinessWizard title={BusinessVerticalTitle} divClass="vertical-options" navColClass="col-xl-3" tabColClass="col-xl-9" />
          <CustomWizard title={CustomVerticalTitle} divClass="vertical-options" navColClass="col-md-3" tabColClass="col-md-9" />
          <BusinessWizard title={BusinessWizardTitle} navColClass="col-12" tabColClass="col-12" />
        </Row>
      </Container>
    </Fragment>
  );
};

export default FormWizard2Container;
