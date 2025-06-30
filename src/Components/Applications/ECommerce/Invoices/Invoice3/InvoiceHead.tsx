import { Table } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";

const InvoiceHead = () => {
  return (
    <tr>
      <td className="p-0">
        <Table className="main-invoice-header" >
          <tbody>
            <tr>
              <td className="p-0 sub-invoice-header">
                <div className="logo">
                    <Image className="img-fluid" src={dynamicImage(`logo/logo.png`)} alt="looginpage" />
                </div>
                <address className="invoice-text invoice-address">
                  <span >1982 Harvest Lane New York, NY12210 United State</span>
                </address> 
              </td>
              <td className="invoice-info text-end border-bottom-0 d-block">
                <span className="bold" >Invoice</span>
                <span  className="medium" >Receipt #1923195</span>
                <span className="medium" >May 02, 2024</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceHead;
