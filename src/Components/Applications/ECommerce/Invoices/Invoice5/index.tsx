import { Fragment, useRef } from "react";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceDateSection from "./InvoiceDateSection";
import InvoiceHead from "./InvoiceHead";
import InvoiceTableHead from "./InvoiceTableHead";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import { ECommerce, Invoice } from "../../../../../Constants";
import { useReactToPrint } from "react-to-print";

const InvoiceFiveContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <Fragment>
      <Breadcrumbs mainTitle={Invoice} parent={ECommerce} />
      <Container>
        <Row>
          <Col sm="12" className="invoice-2 invoice-5">
            <div ref={contentRef}>
              <Card>
                <CardBody>
                  <Table borderless>
                    <tbody>
                      <InvoiceHead />
                      <InvoiceDateSection />
                      <tr>
                        <td>
                          <InvoiceTableHead />
                        </td>
                      </tr> 
                      <tr className="custom-row" >
                        <td>
                          <Image src={dynamicImage(`email-template/invoice-3/sign.png`)} alt="sign" />
                          <span className="name" >Laurine T. Ebbert</span>
                          <span className="role">( Designer )</span>
                        </td>
                      </tr> 
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
        <InvoiceButtons handlePrint={handlePrint} />
      </Container>
    </Fragment>
  );
};

export default InvoiceFiveContainer;
