import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Apps, SupportTicketList, SupportTicketTitle } from "../../../Constants";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { SupportTicketSubTitle } from "../../../Data/Miscellaneous/SupportTicket";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import { Fragment } from "react/jsx-runtime";

const SupportTicketContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={SupportTicketTitle} parent={Apps} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={SupportTicketList} span={SupportTicketSubTitle} tag />
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SupportTicketContainer;
