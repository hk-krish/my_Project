import { Fragment, useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import { ECommerce, Invoice } from "../../../../../Constants";
import { dynamicImage, Image } from "../../../../../Utils";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceDateSection from "./InvoiceDateSection";
import InvoiceHead from "./InvoiceHead";
import InvoiceTable from "./InvoiceTableHead";
import InvoiceTaxSection from "./InvoiceTaxSection";
import { useReactToPrint } from "react-to-print";

const InvoiceFourContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({ contentRef });
  
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Invoice} parent={ECommerce} />
      <Container className="invoice-2 invoice-4">
        <div ref={contentRef}>
          <Card>
            <CardBody>
              <Table borderless>
                <tbody>
                  <InvoiceHead />
                  <InvoiceDateSection />
                  <InvoiceTable />
                  <tr className="custom-gradient-row">
                    <td className="custom-gradient-cell"  />
                  </tr>
                  <InvoiceTaxSection />
                  <tr className="signature-container" >
                    <td className="p-0">
                      <Image src={dynamicImage(`email-template/invoice-3/sign.png`)} alt="sign" />
                      <span  className="name" >Laurine T. Ebbert</span> 
                      <span className="designation" >( Designer )</span> 
                    </td>
                  </tr>
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

export default InvoiceFourContainer;
