import { Col } from "reactstrap";
import { UnOrderListTitle } from "../../../../Constants";
import { UnOrderListData } from "../../../../Data/UiKits/Typography";

const UnOrderList = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper border rounded-3 bg-primary-light">
        <h6 className="sub-title fw-bold">{UnOrderListTitle}</h6>
        <ul>{UnOrderListData && UnOrderListData.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    </Col>
  );
};
export default UnOrderList;
