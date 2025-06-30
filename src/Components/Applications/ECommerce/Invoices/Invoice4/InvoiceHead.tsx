import { Table } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";

const InvoiceHead = () => {
  return (
    <tr>
      <td className="p-0">
        <Table className="invoice-head">
          <tbody>
            <tr className="invoice-header" >
              <td className="p-0">
                <h4 className="invoice-title" >INVOICE</h4>
                <ul className="invoice-list" >
                  <li className="invoice-text">
                    <span className="label">Invoice to :</span>
                  </li>
                  <li className="invoice-text">
                    <span className="client-name" >Brooklyn Simmons</span>
                    <span className="client-info" >2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
                    <span className="client-info" >Phone : (219) 555-0114</span>
                    <span className="client-info" >Email : yourmail@themesforest.com</span>
                    <span className="client-info" >Website: www.websites.com</span>
                  </li> 
                </ul>
              </td>
              <td className="p-0 invoice-logo">
                <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="looginpage" />
                <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="looginpage" />
                <span className="company-info" >2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
                <span className="company-info" >Phone : (239) 555-0108</span>
                <span className="company-info" >Email : zono@themesforest.com</span>
                <span className="company-info" >Website: www.zonothemes.com</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceHead;
