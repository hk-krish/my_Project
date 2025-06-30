import { Fragment, useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import { ECommerce, Invoice } from "../../../../../Constants";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { InvoiceAddressSection } from "./InvoiceAddressSection";
import { InvoiceDateSection } from "./InvoiceDateSection";
import { InvoiceHeadSection } from "./InvoiceHeadSection";
import { InvoiceTable } from "./InvoiceTable";
import { InvoiceTexSection } from "./InvoiceTexSection";
import { useReactToPrint } from "react-to-print";

const Invoice2Container = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
    const handlePrint = useReactToPrint({ contentRef });
  
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Invoice} parent={ECommerce} />
      <Container className="invoice-2">
        <div ref={contentRef}>
          <Card>
            <CardBody>
              <Table borderless>
                <tbody>
                  <tr><InvoiceHeadSection /></tr>
                  <tr><InvoiceDateSection /></tr>
                  <tr><InvoiceAddressSection /></tr>
                  <tr><InvoiceTable /></tr>
                  <tr><InvoiceTexSection /></tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Container>
      <InvoiceButtons handlePrint={handlePrint} />
    </Fragment>
  );
};

export default Invoice2Container;
