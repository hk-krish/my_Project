import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { FormLayoutTitle, FormWidgetsTitle } from "../../../../../Constants";
import NumberingWizard from "./NumberingWizard";
import ShippingForm from "./ShippingForm";
import StudentValidationForm from "./StudentValidationForm";
import VerticalValidationWizard from "./VerticalValidationWizard";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const FormWizard1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={FormWidgetsTitle} parent={FormLayoutTitle} />
      <Container fluid>
        <Row>
          <NumberingWizard />
          <StudentValidationForm />
          <VerticalValidationWizard />
          <ShippingForm />
        </Row>
      </Container>
    </Fragment>
  );
};
export default FormWizard1Container;
