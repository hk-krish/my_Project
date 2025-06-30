import { Col } from "reactstrap";
import { OrderListTitle } from "../../../../Constants";

const OrderList = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper border rounded-3 h-100 bg-warning-light">
        <h2 className="sub-title fw-bold">{OrderListTitle}</h2>
        <ol>
          <li>UI Kits</li>
          <li>Bonus Ui</li>
          <li>Animations</li>
          <li>
            <ol>
              <li>Typography</li>
              <li>Avatars</li>
              <li>Grid</li>
              <li>Tag & pills</li>
              <li>Alert</li>
            </ol>
          </li>
          <li>Dropdown</li>
          <li>Tabs</li>
          <li>Accordion</li>
        </ol>
      </div>
    </Col>
  );
};
export default OrderList;
