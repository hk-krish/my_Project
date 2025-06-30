import { Col, Input } from "reactstrap";
import { Featured, HighestPrices, LowestPrices, ProductShown } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { filterSortBy } from "../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";

const Sorting = () => {
  const dispatch = useAppDispatch();
  
  return (
    <Col md="6" className="text-sm-end">
      <span className="f-w-500 m-r-5">{ProductShown}</span>
      <div className="select2-drpdwn-product select-options d-inline-block">
        <Input type="select" className="form-control btn-square shadow-none" name="select" onChange={(event) => dispatch(filterSortBy(event.target.value))}>
          <option value="Featured">{Featured}</option>
          <option value="LowestPrices">{LowestPrices}</option>
          <option value="HighestPrices">{HighestPrices}</option>
        </Input>
      </div>
    </Col>
  );
};
export default Sorting;
