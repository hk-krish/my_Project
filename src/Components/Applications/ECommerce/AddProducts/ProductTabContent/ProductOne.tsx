import { Col, Form, FormFeedback, Input, Label, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setFormValue } from "../../../../../ReduxToolkit/Reducers/ECommerce/AddProductSlice";
import { MdeEditorText, ProductTitleLabel } from "../../../../../Constants";
import SimpleMdeReact from "react-simplemde-editor";

const ProductOne = () => {
  const { formValue } = useAppSelector((state) => state.addProduct);
  const dispatch = useAppDispatch();

  return (
    <div className="sidebar-body">
      <Form>
        <Row className="g-2">
          <Col xs="12">
            <Label className="m-0">{ProductTitleLabel} <span className="text-danger"> *</span></Label>
          </Col>
          <Col xs="12">
            <div className="custom-input">
              <Input className={formValue.userName !== "" ? "is-valid" : "is-invalid"} type="text" required name="userName" onChange={(e) => dispatch(setFormValue({ name: "userName", value: e.target.value }))} />
              <FormFeedback>A product name is required and recommended to be unique.</FormFeedback>
            </div>
          </Col>
          <Col xs="12">
              <div id="toolbar2" className="toolbar2">
                <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: false, spellChecker: true }} />
              </div>
            <p className="f-light">{"Improve product visibility by adding a compelling description."}</p>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProductOne;
