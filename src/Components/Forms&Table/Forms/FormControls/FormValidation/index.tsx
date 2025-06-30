import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { FormControlsTitle, FormValidationTitle } from "../../../../../Constants";
import BrowserDefaults from "./BrowserDefaults";
import TooltipFormValidation from "./TooltipFormValidation";
import ValidationForm from "./ValidationForm";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const FormValidationContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={FormValidationTitle} parent={FormControlsTitle} />
      <Container fluid>
        <Row>
          <TooltipFormValidation />
          <BrowserDefaults />
          <ValidationForm />
        </Row>
      </Container>
    </Fragment>
  );
};

export default FormValidationContainer;
