import { Col, Form, Input, Label, Row } from "reactstrap";
import { ChooseYourCurrency, InitialCost, ProductStocks, SellingPriceText } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducers/ECommerce/AddProductSlice";
import TypesOfProduct from "./TypesOfProduct";

const ProductFour = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="sidebar-body">
      <Form className="price-wrapper">
        <Row className="g-3 custom-input">
          <Col sm="6">
            <Label>{InitialCost}<span className="text-danger">*</span></Label>
            <Input type="number" name="initialCost" onChange={(e) => dispatch(setFormValue({ name: "initialCost", value: e.target.value }))} />
          </Col>
          <Col sm="6">
            <Label>{SellingPriceText} <span className="text-danger">*</span></Label>
            <Input type="number" name="initialPrice" onChange={(e) => dispatch(setFormValue({ name: "initialPrice", value: e.target.value }))} />
          </Col>
          <Col sm="6">
            <Label>{ChooseYourCurrency}</Label>
            <Input type="select" defaultValue={"Dollar $"} name="select" onChange={(e) => dispatch(setFormValue({ name: "select", value: e.target.value }))}>
              <option>Dollar $</option>
              <option>Euro €</option>
              <option>Rupees ₹</option>
              <option>British pounds £</option>
              <option>Russian Ruble ₽</option>
              <option>Japanese Yen ¥</option>
              <option>Singapore Dollar S$</option>
            </Input>
          </Col>
          <Col sm="6">
            <Label>{ProductStocks}<span className="text-danger">*</span></Label>
            <Input type="number" name="productStocks" onChange={(e) => dispatch(setFormValue({ name: "productStocks", value: e.target.value }))} />
          </Col>
          <TypesOfProduct />
        </Row>
      </Form>
    </div>
  );
};

export default ProductFour;
