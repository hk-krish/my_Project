import { Table } from "reactstrap";
import InvoiceHeadData from "./InvoiceHeadData";
import SvgIcon from "../../../../CoreComponents/SvgIcon";
import { dynamicImage, Image } from "../../../../../Utils";

const InvoiceHead = () => {
  return (
    <tr>
      <td>
        <Table  className="table-wrapper" >
          <tbody>
            <tr className="table-header" >
              <td className="p-0 logo-container border-0">
              <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="looginpage" />
              <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="looginpage" />
              </td> 
              <td className="p-0 border-0">
                <ul className="contact-info" >
                  <li>
                    <SvgIcon className="stroke-icon" iconId="call"  />
                    <span className="contact-text"  >(239) 555-0108</span>
                  </li>
                  <li className="separator" >
                    <SvgIcon iconId="email-box"  />
                    <span className="contact-text" >zono@themesforest.com</span>
                  </li>
                  <li>
                    <SvgIcon iconId="web"  />
                    <span  >Website: www.zonothemes.com</span>
                  </li>
                </ul>
              </td>
            </tr>
            <InvoiceHeadData />
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceHead;
