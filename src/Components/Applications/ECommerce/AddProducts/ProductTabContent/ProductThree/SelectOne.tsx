import { Col, Input, Label, Row } from "reactstrap";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducers/ECommerce/AddProductSlice";
import { AddCategory } from "../../../../../../Constants";

const SelectOne = () => {
  const dispatch = useAppDispatch();

  return (
    <Col sm="6">
      <Row className="g-2">
        <Col xs="12">
          <Label className="m-0">{AddCategory}<span className="text-danger">*</span></Label>
        </Col>
        <Col xs="12">
          <Input type="select" name="category" defaultValue="Toys & games" onChange={(e) => dispatch(setFormValue({ name: "category", value: e.target.value }))}>
            <option>Toys & games</option>
            <option>Sportswear </option>
            <option>Jewellery </option>
            <option>Furniture and Decor</option>
            <option>Health, Personal Care, and Beauty</option>
            <option>Auto and Parts </option>
            <option>Baby Care Products</option>
          </Input>
          <p className="f-light">A product can be added to a category</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectOne;
