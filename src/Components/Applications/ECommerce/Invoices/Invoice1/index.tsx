import { Fragment, useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import { AuthorizedSign, ECommerce, Invoice } from "../../../../../Constants";
import { dynamicImage, Image } from "../../../../../Utils";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceContent from "./InvoiceContent";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceOrder from "./InvoiceOrder";
import { useReactToPrint } from "react-to-print";

const Invoice1Container = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({ contentRef });
  
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Invoice} parent={ECommerce} />
      <Container>
        <div ref={contentRef}>
          <Card className="invoice-1">
            <CardBody>
              <Table className="table-wrapper" borderless>
                <tbody>
                  <tr>
                    <InvoiceHeader />
                  </tr>
                  <tr>
                    <td className="bg-img-cover">
                      <Image className="banner-image w-100" src={dynamicImage(`email-template/invoice-1/1.png`)} alt="background" />
                    </td>
                  </tr>
                  <tr>
                    <InvoiceContent />
                  </tr>
                  <tr>
                    <InvoiceOrder />
                  </tr>
                </tbody>
                <tbody>
                  <tr className="signature-section"> 
                    <td>
                      <Image src={dynamicImage(`email-template/invoice-1/sign.png`)} alt="sign" />
                      <span className="signature-line" />
                      <span className="authorized-sign">{AuthorizedSign}</span>
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

export default Invoice1Container;
