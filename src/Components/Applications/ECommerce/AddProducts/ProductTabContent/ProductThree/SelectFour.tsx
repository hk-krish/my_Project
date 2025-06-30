import { Col, Input, Label, Row } from "reactstrap";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducers/ECommerce/AddProductSlice";
import { PublishStatus } from "../../../../../../Constants";

const SelectFour = () => {
  const dispatch = useAppDispatch()
  return (
    <Col sm="6">
      <Row>
        <Col xs="12">
          <Label for="validationServer01">{PublishStatus}<span className="text-danger"> *</span></Label>
          <Input type="select" name="status" onChange={(e)=>dispatch(setFormValue({name:"status",value:e.target.value}))}>
            <option>Publish</option>
            <option>Drafts</option>
            <option>Unpublish</option>
          </Input> 
          <p className="f-light mt-2">Choose the status</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectFour;
