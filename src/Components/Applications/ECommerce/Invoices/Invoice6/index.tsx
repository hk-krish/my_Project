import { Fragment, useRef } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceSixHeader from "./InvoiceSixHeader";
import InvoiceSixTable from "./InvoiceSixTable";
import UserDetails from "./UserDetails";
import { ECommerce, Invoice } from "../../../../../Constants";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import { useReactToPrint } from "react-to-print";

const InvoiceSixContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <Fragment>
      <Breadcrumbs mainTitle={Invoice} parent={ECommerce} />
      <Container>
        <Row>
          <Col sm="12">
            <div ref={contentRef}>
              <Card>
                <CardBody>
                  <div className="invoice">
                    <div>
                      <InvoiceSixHeader />
                      <hr />
                      <UserDetails />
                      <InvoiceSixTable />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <InvoiceButtons handlePrint={handlePrint} />
    </Fragment>
  );
};

export default InvoiceSixContainer;
