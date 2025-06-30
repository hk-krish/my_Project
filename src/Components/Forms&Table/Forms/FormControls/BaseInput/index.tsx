import { Container, Row } from "reactstrap";
import BasicFloatingInputControl from "./BasicFloatingInputControl";
import BasicForm from "./BasicForm";
import BasicHtmlInputControl from "./BasicHtmlInputControl";
import EdgesInputStyle from "./EdgesInputStyle";
import FileInput from "./FileInput";
import FlatInputStyle from "./FlatInputStyle";
import FloatingForm from "./FloatingForm";
import FormControlSizing from "./FormControlSizing";
import RaiseInputStyle from "./RaiseInputStyle";
import SelectSizing from "./SelectSizing";
import { BaseInputsTitle, FormControlsTitle } from "../../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const BaseInputsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BaseInputsTitle} parent={FormControlsTitle} />
      <Container fluid>
        <Row>
          <BasicForm />
          <FloatingForm />
          <SelectSizing />
          <FormControlSizing />
          <FileInput />
          <FlatInputStyle />
          <BasicHtmlInputControl />
          <BasicFloatingInputControl />
          <EdgesInputStyle />
          <RaiseInputStyle />
        </Row>
      </Container>
    </Fragment>
  );
};
export default BaseInputsContainer;
