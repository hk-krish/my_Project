import CountUp from "react-countup";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { Loss, Profit } from "../../../Constants";
import { TicketListData } from "../../../Data/Miscellaneous/SupportTicket";

const TicketList = () => {
  return (
    <Row>
      {TicketListData.map((data) => (
        <Col xl="4" sm="6" className="box-col-6" key={data.id}>
          <Card className={`ecommerce-widget shadow-none`}>
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs="5">
                  <span>{data.title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={data.count} />
                  </h3>
                </Col>
                <Col xs="7">
                  <div className="text-end">
                    <ul>
                      <li>
                        {Profit}
                        <span className="product-stts txt-success ms-2">
                          {"8989"}
                          <i className="icon-angle-up f-12 ms-1"></i>
                        </span>
                      </li>
                      <li>
                        {Loss}
                        <span className="product-stts txt-danger ms-2">
                          {"2560"}
                          <i className="icon-angle-down f-12 ms-1"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="progress-showcase mt-4">
                <Progress className="sm-progress-bar" color={data.color} value="70" />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
