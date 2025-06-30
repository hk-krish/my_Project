import { Fragment, useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceAddSection from "./InvoiceAddSection";
import InvoiceAmountSection from "./InvoiceAmountSection";
import InvoiceHead from "./InvoiceHead";
import InvoiceTable from "./InvoiceTable";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import { ECommerce, Invoice } from "../../../../../Constants";
import { useReactToPrint } from "react-to-print";

const Invoice3Container = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <Fragment>
      <Breadcrumbs mainTitle={Invoice} parent={ECommerce} />
      <Container className="invoice-3">
        <div ref={contentRef}>
          <Card>
            <CardBody>
              <Table borderless>
                <tbody>
                  <InvoiceHead />
                  <InvoiceAddSection />
                  <InvoiceTable />
                  <InvoiceAmountSection />
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

export default Invoice3Container;
