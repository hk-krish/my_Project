import { Col, Form, Input } from "reactstrap";
import { Search } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { filterSearchBy } from "../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";

const SearchBox = () => {
  const dispatch = useAppDispatch();

  return (
    <Col md="9" sm="12">
      <Form>
        <div className="form-group m-0">
          <Input type="search" placeholder={Search} onChange={(e) => dispatch(filterSearchBy(e.target.value))} />
          <i className="fa fa-search"></i>
        </div>
      </Form>
    </Col>
  );
};
export default SearchBox;
